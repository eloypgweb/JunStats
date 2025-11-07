-- scripts/seed-plays.sql
-- Idempotent seed file to insert sample plays (jugadas)
-- Workflow:
-- 1) Upload your video file to Supabase Storage (e.g. bucket "plays_videos" or "public").
-- 2) Make it public (or use signed URLs). Example public URL pattern:
--    https://<project>.supabase.co/storage/v1/object/public/<bucket>/<path>
-- 3) Put that URL into the video_url field below and run this file in Supabase SQL Editor.

BEGIN;

-- Optional: if you want titles to be unique you can add a unique constraint.
-- Uncomment if you are sure there are no duplicate titles:
-- ALTER TABLE public.plays ADD CONSTRAINT plays_title_unique UNIQUE (title);

-- Insert plays (idempotent using WHERE NOT EXISTS on title)
INSERT INTO public.plays (title, description, video_url, diagram_url, category, created_at)
SELECT
  'Pick and Roll Básico',
  'Entrada clásica pick and roll: bloqueo del base al atacante, lectura del defensor; mejores lecturas y opciones de pase/penetración.',
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/pick_and_roll_basico.mp4',
  NULL,
  'Ofensiva',
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'Pick and Roll Básico');

INSERT INTO public.plays (title, description, video_url, diagram_url, category, created_at)
SELECT
  'Corte hacia la canasta',
  'Secuencia de pases y corte del alero hacia la canasta para recibir en ventaja; opciones de pase y finalización.',
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/corte_hacia_canasta.mp4',
  NULL,
  'Ofensiva',
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'Corte hacia la canasta');

-- More examples (change titles and URLs as needed)
INSERT INTO public.plays (title, description, video_url, diagram_url, category, created_at)
SELECT
  'Defensa zona 2-3 - Rotaciones',
  'Patrón de rotaciones en zona 2-3 para cerrar espacios y contestar tiros exteriores; enfoque en comunicación.',
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/defensa_zona_2_3.mp4',
  NULL,
  'Defensa',
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'Defensa zona 2-3 - Rotaciones');

COMMIT;

-- Verification
SELECT id, title, category, video_url, created_at FROM public.plays ORDER BY created_at DESC LIMIT 50;
