type ContactBody = {
  name: string;
  subject: string;
  message: string;
};

// Ensure this endpoint is server-rendered so request headers/body are available
export const prerender = false;


export async function POST({ request }: { request: Request }) {
  try {
    // parse body safely and include debugging info (raw body + content-type) on failure
    let body: ContactBody | null = null;
    const contentType = request.headers.get('content-type') || '';
    const raw = await request.text();

    // Debug: log headers and raw length to server console for easier diagnosis
    try {
      // headers -> plain object for readable logging
      const headersObj: Record<string, string> = {};
      for (const [k, v] of request.headers.entries()) headersObj[k] = v ?? '';
      console.log('[api/contact] headers:', headersObj);
      console.log('[api/contact] raw-length:', raw?.length ?? 0);
    } catch (e) {
      console.warn('[api/contact] could not log headers', e);
    }
    if (!raw) {
      return new Response(JSON.stringify({ error: 'Invalid JSON body (empty)', raw, contentType }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    try {
      body = JSON.parse(raw) as ContactBody;
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON body (parse error)', raw, contentType }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    if (!body || !body.name || !body.subject || !body.message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // If running locally and env vars not set, try to load `.env` automatically for convenience
    if (!process.env.SMTP_HOST && process.env.NODE_ENV !== 'production') {
      try {
        const dotenv = await import('dotenv');
        dotenv.config();
        console.log('[api/contact] loaded .env using dotenv');
      } catch (e) {
        console.warn('[api/contact] dotenv not available or failed to load .env', e);
      }
    }

    // Read SMTP config from env
    let host = process.env.SMTP_HOST;
    let port = parseInt(process.env.SMTP_PORT || '587', 10);
    let user = process.env.SMTP_USER;
    let pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user || `no-reply@junstats.local`;
    const to = process.env.CONTACT_TO || 'eloyperezgomez2004@gmail.com';

    let useEthereal = false;

    // Dynamic import so missing dependency results in a JSON error instead of crashing module load
    let nodemailer: any;
    try {
      nodemailer = await import('nodemailer');
    } catch (e: any) {
      return new Response(JSON.stringify({ error: 'nodemailer not installed. Run npm install' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    // If SMTP not configured, and we're in development, create an Ethereal test account so the endpoint can still be tested.
    if (!host || !user || !pass) {
      if (process.env.NODE_ENV === 'production') {
        return new Response(JSON.stringify({ error: 'SMTP not configured on server (SMTP_HOST/SMTP_USER/SMTP_PASS)' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }

      try {
        const testAccount = await nodemailer.createTestAccount();
        host = testAccount.smtp.host;
        port = testAccount.smtp.port;
        user = testAccount.user;
        pass = testAccount.pass;
        useEthereal = true;
        console.log('[api/contact] using Ethereal test account', { host, port, user });
      } catch (err) {
        return new Response(JSON.stringify({ error: 'SMTP not configured and Ethereal account creation failed' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
    }

    const transporter = nodemailer.createTransport({ host, port, auth: { user, pass }, secure: port === 465 });

    const html = `
      <h2>Nuevo mensaje desde JunStats</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(body.subject)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(body.message).replace(/\n/g, '<br/>')}</p>
    `;

    const info = await transporter.sendMail({
      from,
      to,
      subject: `[JunStats] ${body.subject}`,
      html,
      text: `${body.name} - ${body.subject}\n\n${body.message}`,
    });

    // If we used Ethereal, include the preview URL in the response so the developer can open it.
    if (useEthereal) {
      const preview = nodemailer.getTestMessageUrl(info) || null;
      console.log('[api/contact] ethereal preview:', preview);
      return new Response(JSON.stringify({ ok: true, preview }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

  // Return messageId for real SMTP sends so the caller can reference it
  return new Response(JSON.stringify({ ok: true, messageId: info.messageId }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err?.message ?? err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
