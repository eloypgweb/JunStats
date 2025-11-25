import getSupabaseServer from '../../lib/db/supabase-server';

// GET /api/player-stats?game_id=5
// GET /api/player-stats?player_id=10
export async function GET({ request }: { request: Request }) {
  let supabase;
  try {
    supabase = getSupabaseServer();
  } catch (e: any) {
    return new Response(JSON.stringify({ error: String(e?.message ?? e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = new URL(request.url);
  const gameId = url.searchParams.get('game_id');
  const playerId = url.searchParams.get('player_id');

  let query = supabase
    .from('player_stats')
    .select('*, players(nombre, apellido, dorsal)')
    .order('player_id', { ascending: true });

  if (gameId) query = query.eq('game_id', Number(gameId));
  if (playerId) query = query.eq('player_id', Number(playerId));

  const { data, error } = await query;

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ stats: data }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=30',
    },
  });
}
