import getSupabaseServer from '../../lib/db/supabase-server';

// Simple demo: a single counter stored in a table `counters` with primary key `slug`.
// Schema to create in Supabase (SQL):
//   create table if not exists public.counters (
//     slug text primary key,
//     value integer not null default 0,
//     updated_at timestamptz not null default now()
//   );
// Optional RLS policies can be added later; here we only access via service role key on the server.

const SLUG = 'demo';

type CounterRow = {
  slug: string;
  value: number;
  updated_at: string;
};

export async function GET() {
  // Validate env and create client. If env is missing, return a clear error instead of a generic fetch failure.
  let supabase;
  try {
    supabase = getSupabaseServer();
  } catch (e: any) {
    return new Response(JSON.stringify({ error: String(e?.message ?? e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // Ensure row exists; if not, create it with value 0, then return.
  const { data, error } = await supabase
    .from('counters')
    .select('slug, value, updated_at')
    .eq('slug', SLUG)
    .single();

  if (error && error.code !== 'PGRST116') {
    // PGRST116 is "Results contain 0 rows" for .single(). We'll handle it below.
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  if (!data) {
    const { data: inserted, error: insertError } = await supabase
      .from('counters')
      .insert({ slug: SLUG, value: 0 })
      .select('slug, value, updated_at')
      .single();

    if (insertError) {
      return new Response(JSON.stringify({ error: insertError.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ value: inserted.value }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  }

  return new Response(JSON.stringify({ value: data.value }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export async function POST() {
  // Validate env and create client
  let supabase;
  try {
    supabase = getSupabaseServer();
  } catch (e: any) {
    return new Response(JSON.stringify({ error: String(e?.message ?? e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // Read the current value, then increment. This is a simple, non-atomic demo.
  const { data, error } = await supabase
    .from('counters')
    .select('slug, value')
    .eq('slug', SLUG)
    .single();

  if (error && error.code !== 'PGRST116') {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  const current = data?.value ?? 0;
  const next = current + 1;

  const { data: updated, error: updateError } = await supabase
    .from('counters')
    .upsert({ slug: SLUG, value: next })
    .select('slug, value')
    .single();

  if (updateError) {
    return new Response(JSON.stringify({ error: updateError.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ value: updated?.value ?? next }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
