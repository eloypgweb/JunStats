-- scripts/melocoton_views.sql
-- Vistas auxiliares para previsualizar datos en el frontend (prefijo melocoton_)
-- Ejecuta este archivo en Supabase SQL Editor para crear/actualizar las vistas.

-- 1) Vista resumen de plays (jugadas)
CREATE OR REPLACE VIEW public.melocoton_plays_view AS
SELECT
  id,
  title,
  COALESCE(short_description, substring(content_md from 1 for 200)) AS short_description,
  slug,
  tags,
  video_url,
  category,
  language,
  is_public,
  created_at,
  content_md,
  length(coalesce(content_md, '')) AS content_length
FROM public.plays;

-- 2) Vista resumen de games (partidos)
CREATE OR REPLACE VIEW public.melocoton_games_view AS
SELECT
  id,
  opponent,
  date,
  location,
  foto_equipo,
  result,
  status,
  created_at,
  (status = 'jugado')::boolean AS played
FROM public.games;

-- Selects útiles para comprobar rápidamente
-- SELECT * FROM public.melocoton_plays_view ORDER BY created_at DESC LIMIT 50;
-- SELECT * FROM public.melocoton_games_view ORDER BY date DESC LIMIT 50;
