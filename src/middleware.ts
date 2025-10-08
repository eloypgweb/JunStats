export async function onRequest(context: any, next: any) {
  // No-op middleware to satisfy Astro during build/prerender.
  return await next();
}
// middleware disabled — keeping file to avoid accidental middleware inclusion during build
