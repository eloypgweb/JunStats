// Middleware placeholder: Astro llama a `onRequest` en cada petición.
// Esta implementación es un "no-op" que solo llama a `next()` y no modifica
// la petición ni la respuesta; se mantiene para evitar inclusión accidental
// y como plantilla para añadir lógica global más adelante.
export async function onRequest(context: any, next: any) {
  // No-op middleware to satisfy Astro during build/prerender.
  return await next();
}
// middleware disabled — keeping file to avoid accidental middleware inclusion during build
