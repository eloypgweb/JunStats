import getSupabaseServer from '../../lib/db/supabase-server';

// Endpoint para obtener todos los jugadores del equipo
// GET /api/players

type Player = {
  id: number;
  numero: number;
  nombre: string;
  apellido: string;
  altura: string;
  desayuno_favorito: string;
  created_at: string;
};

export async function GET() {
  // Crear cliente de Supabase
  let supabase;
  try {
    supabase = getSupabaseServer();
  } catch (e: any) {
    return new Response(JSON.stringify({ error: String(e?.message ?? e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Obtener todos los jugadores ordenados por número
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .order('numero', { ascending: true });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ players: data }), {
    status: 200,
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60' // Cache 1 minuto
    },
  });
}
