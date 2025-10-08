export async function GET() {
  // Generate a semi-random visitor id
  const value = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,10);
  const maxAge = 10 * 24 * 60 * 60; // 10 days in seconds

  // In production on Vercel use Secure; when developing locally it's fine without it
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';

  // HttpOnly so JS can't read it (more secure)
  const cookie = `junstats_visitor=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax; HttpOnly${secure}`;

  return new Response(null, {
    status: 204,
    headers: {
      'Set-Cookie': cookie,
      'Cache-Control': 'no-store'
    }
  });
}
