import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Server-only Supabase client factory.
// In static mode, Astro doesn't auto-load .env for API routes, so we use dotenv explicitly.
// Do NOT use from client-side code.

// Load .env files manually (dotenv will look for .env, .env.local, .env.development, etc.)
config();

export function getSupabaseServer(): SupabaseClient {
  // Read directly from process.env, which Astro loads from .env files in API routes
  const SUPABASE_URL = process.env.SUPABASE_URL;
  // Support both SERVICE_ROLE_KEY (recommended for server) and SUPABASE_KEY (docs alias)
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    // Log what we actually see for debugging
    console.error('[supabase-server] Environment check:', {
      SUPABASE_URL: SUPABASE_URL ? `${SUPABASE_URL.slice(0, 20)}...` : 'MISSING',
      SUPABASE_SERVICE_ROLE_KEY: SUPABASE_SERVICE_ROLE_KEY ? 'present' : 'MISSING',
      SUPABASE_KEY: process.env.SUPABASE_KEY ? 'present' : 'MISSING',
      allEnvKeys: Object.keys(process.env).filter(k => k.includes('SUPABASE')),
    });
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_KEY). Add them to your .env (local) and Vercel project settings.'
    );
  }

  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      headers: {
        'X-Client-Info': 'JunStats/DB-Demo',
      },
    },
  });
}

export default getSupabaseServer;
