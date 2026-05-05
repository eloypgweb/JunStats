type ContactBody = {
  name: string;
  subject: string;
  message: string;
};

// Ensure this endpoint is server-rendered so request headers/body are available
export const prerender = false;


export async function POST({ request }: { request: Request }) {
  try {
    // Load .env manually to ensure variables are available
    if (!process.env.RESEND_API_KEY) {
      try {
        const dotenv = await import('dotenv');
        dotenv.config();
      } catch (e) {
        console.warn('[contact] dotenv not available');
      }
    }

    console.log('[contact] available env keys:', Object.keys(process.env).filter(k => k.includes('RESEND') || k.includes('CONTACT')));
    const body = (await request.json()) as Partial<ContactBody>;

    if (!body || !body.name || !body.subject || !body.message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM || 'JunStats <onboarding@resend.dev>';
    const to = process.env.CONTACT_TO || 'eloyperezgomez2004@gmail.com';

    console.log('[contact] env check - apiKey present:', !!apiKey, 'from:', from, 'to:', to);

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured on server' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif; line-height: 1.6; color: #0f172a; }
          .container { max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #2337ff 0%, #1e40af 100%); color: white; padding: 40px 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
          .content { padding: 40px 30px; }
          .greeting { font-size: 16px; color: #475569; margin-bottom: 30px; }
          .greeting strong { color: #0f172a; font-size: 18px; }
          .message-box { background: white; border-left: 4px solid #2337ff; padding: 20px; border-radius: 6px; margin: 20px 0; }
          .field { margin-bottom: 20px; }
          .field-label { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
          .field-value { font-size: 16px; color: #0f172a; }
          .subject-value { font-size: 18px; font-weight: 600; color: #2337ff; }
          .message-text { font-size: 16px; color: #0f172a; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word; }
          .footer { background: #f1f5f9; padding: 20px 30px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
          .footer a { color: #2337ff; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://junstats.vercel.app/junstatsLogo.png" alt="JunStats" style="width: 80px; height: auto; margin-bottom: 10px;">
            <h1>JunStats</h1>
            <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Nuevo mensaje de contacto</p>
          </div>
          <div class="content">
            <p class="greeting"><strong>${escapeHtml(body.name)}</strong> te ha enviado un nuevo mensaje.</p>
            
            <div class="message-box">
              <div class="field">
                <div class="field-label">Asunto</div>
                <div class="field-value subject-value">${escapeHtml(body.subject)}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Mensaje</div>
                <div class="message-text">${escapeHtml(body.message).replace(/\n/g, '<br/>')}</div>
              </div>
            </div>
          </div>
          <div class="footer">
            <p style="margin: 0;">Este es un mensaje de contacto desde <strong>JunStats</strong> • <a href="https://junstats.vercel.app">Ver sitio web</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to,
        subject: `[JunStats] ${body.subject}`,
        html,
        text: `${body.name} - ${body.subject}\n\n${body.message}`,
        reply_to: process.env.CONTACT_REPLY_TO || undefined,
      }),
    });

    console.log('[contact] resend response status:', resendResponse.status);

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.log('[contact] resend error:', errorText);
      return new Response(JSON.stringify({ error: `Resend error: ${errorText || resendResponse.statusText}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const info = (await resendResponse.json()) as { id?: string };

    return new Response(JSON.stringify({ ok: true, messageId: info.id || null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
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
