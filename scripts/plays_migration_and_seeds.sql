-- scripts/plays_migration_and_seeds.sql
-- Idempotent migration + seed for `public.plays` ensuring `content_md` exists and plays are inserted.
-- Run this in the Supabase SQL editor (connected to your project). It is safe to re-run.

BEGIN;

-- 1) Añadir columnas (idempotente)
ALTER TABLE public.plays ADD COLUMN IF NOT EXISTS short_description text;
ALTER TABLE public.plays ADD COLUMN IF NOT EXISTS content_md text;
ALTER TABLE public.plays ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE public.plays ADD COLUMN IF NOT EXISTS tags text[];
ALTER TABLE public.plays ADD COLUMN IF NOT EXISTS language text DEFAULT 'es';
ALTER TABLE public.plays ADD COLUMN IF NOT EXISTS is_public boolean DEFAULT true;

-- 2) Índice único para slug (si no existe)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes WHERE schemaname = 'public' AND tablename = 'plays' AND indexname = 'idx_plays_slug_unique'
  ) THEN
    CREATE UNIQUE INDEX idx_plays_slug_unique ON public.plays (slug);
  END IF;
END$$;

-- 3) Índice GIN para tags (consulta rápida por tags)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes WHERE schemaname = 'public' AND tablename = 'plays' AND indexname = 'idx_plays_tags_gin'
  ) THEN
    CREATE INDEX idx_plays_tags_gin ON public.plays USING GIN (tags);
  END IF;
END$$;

-- 4) Backfill seguro de slugs a partir del título (genera slugs y añade sufijo si hay duplicados)
WITH gen AS (
  SELECT id, lower(regexp_replace(trim(title), '[^a-zA-Z0-9]+', '-', 'g')) AS base_slug
  FROM public.plays
  WHERE slug IS NULL OR slug = ''
),
ranked AS (
  SELECT id, base_slug,
    ROW_NUMBER() OVER (PARTITION BY base_slug ORDER BY id) AS rn,
    COUNT(*) OVER (PARTITION BY base_slug) AS cnt
  FROM gen
),
to_update AS (
  SELECT id,
    CASE WHEN cnt = 1 THEN base_slug ELSE base_slug || '-' || rn::text END AS new_slug
  FROM ranked
)
UPDATE public.plays p
SET slug = regexp_replace(u.new_slug, '(^-+|-+$)', '', 'g')
FROM to_update u
WHERE p.id = u.id;

COMMIT;

-- --------------------------------------------------------------------------
-- Seed inserts for plays (idempotent). Re-run after adding columns above.
-- --------------------------------------------------------------------------
BEGIN;

-- TRANSI
INSERT INTO public.plays
  (title, short_description, content_md, video_url, category, tags, language, is_public, created_at)
SELECT
  'TRANSI',
  'Jugada en situación de transición. 5 abiertos.',
  $$
## TRANSI

**Situación tras rebote o saque de fondo rápido.**

Tras rebote o saque rápido, balón al manejador. Importante recibir en la altura de tiro libre.

El manejador va en bote mientras todos pasamos de campo y nos colocamos en situación de **5 abiertos**. El tráiler lanza corte al aro; si recibe el balón, acaba. Pero si no recibe, deberá caer a **poste bajo de lado contrario**.

En ese instante del corte, los jugadores aplican normas de **spacing**, reemplazando las posiciones. Hay pase a cabecera y en cuanto se suelta el balón, vamos a **bloquear a esquina** del lado fuerte. Si sacamos ventaja y se puede dar el pase, se acaba. Si no, se invierte balón a lado contrario y damos espacio para que se juegue el **2x2**. En caso de que el poste tenga ventaja, se juega el pase al poste; si no, bloqueo directo. Aplicamos lectura de ventajas.
$$,
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/TRANSI1.webm',
  'Ofensiva',
  ARRAY['transición','spacing','5-abiertos', 'llegar-jugando', 'rapido'],
  'es',
  true,
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'TRANSI');

-- BLIND
INSERT INTO public.plays
  (title, short_description, content_md, video_url, category, tags, language, is_public, created_at)
SELECT
  'BLIND',
  'Jugada de fondo.',
  $$
## BLIND

**Situación que si se hace bien, siempre se saca ventaja.**

Situación que puede venir por fuera del rival, una falta que sea saque de fondo o incluso por un tapón que nos llevemos y saquemos de fondo.

Nos colocamos:
- 1 en 45º lado contrario
- 2 sacador
- 3 en semicírculo de la zona
- 4 en 45º de lado fuerte
- 5 en altura de TL o algo más atrás

3 pone un bloqueo ciego orientando a 5, para después de pinchar hacer el roll al aro. Esa es la opción que queremos, y SIEMPRE se saca ventaja si se hace bien.

En caso de que no salga, el 4 iría a cabecera a poner un bloqueo para que el 1 lo pille en carrera y recibir un pase de seguridad. Empieza jugada.
$$,
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/FONDO-BLIND.webm',
  'Ofensiva',
  ARRAY['fondo','bloqueos','tactica'],
  'es',
  true,
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'BLIND');

-- SHORT
INSERT INTO public.plays
  (title, short_description, content_md, video_url, category, tags, language, is_public, created_at)
SELECT
  'SHORT',
  'Jugada de banda.',
  $$
## SHORT

**Situación de saque de banda.**

Situación que puede venir por fuera del rival o una falta que sea saque de banda.

Nos colocamos:

- 1 en 45º lado contrario
- 2 sacador
- 3 en esquina
- 4 poste bajo
- 5 entre TL y T3
- 4 pone un bloqueo indirecto orientando a 5, para después de pinchar, hacer otro bloqueo seguido a 1.

En caso de que no reciba ni el 5 en el corte ni el 1 en el bloqueo indirecto, el 3 que está en esquina, trabaja con su defensor para recibir rápido. Empieza jugada.
$$,
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/BANDA-SHORT.webm',
  'Ofensiva',
  ARRAY['banda','bloqueos','tactica', 'cortes', 'ventajas'],
  'es',
  true,
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'SHORT');

-- PALMA
INSERT INTO public.plays
  (title, short_description, content_md, video_url, category, tags, language, is_public, created_at)
SELECT
  'PALMA',
  'Jugada en estático.',
  $$
## PALMA

Nos colocamos: manejador con balón en cabecera; tirador debajo del aro; grandes en postes medios; apoyo en TL.

tirador juega con fintas para finalmente salir por cualquiera de los dos lados y hacer un carretón hacia 45º. En el momento que el tirador se decanta por un lado, simultáneamente el jugador de apoyo en TL se abre con un cambio de ritmo al otro 45º.

La primera opción es recibir con espacio y hacer el tiro, si no, los postes hacen un intercambio con un bloqueo y se juega el balón interior. A partir de ahí, aplicamos normas de spacing.
$$,
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/PALMA.webm',
  'Ofensiva',
  ARRAY['estatico','tirador','postes', 'ventajas'],
  'es',
  true,
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'PALMA');

-- HAMMER
INSERT INTO public.plays
  (title, short_description, content_md, video_url, category, tags, language, is_public, created_at)
SELECT
  'HAMMER',
  'Jugada en estático.',
  $$
## HAMMER

Nos colocamos en situación de 3 abiertos y 2 interior en poste alto.

Balón empieza en 45º, que será el tirador. Damos pase a cabecera, vamos en bote a 45º de lado contrario y el que dió el pase lanza corte. Si no recibe, va a poner un bloqueo directo a esquina de balón. Acto seguido, vuelve a debajo del aro, para pillar un ascensor con los 2 interiores que bloquean a la altura de TL. 💵 Cash 💵
$$,
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/HAMMER.webm',
  'Ofensiva',
  ARRAY['estatico','tirador','bloqueo_directo', 'ventajas'],
  'es',
  true,
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'HAMMER');

-- FUFU
INSERT INTO public.plays
  (title, short_description, content_md, video_url, category, tags, language, is_public, created_at)
SELECT
  'FUFU',
  'ugada de fondo con bloqueo indirecto para caída de grande a zona.',
  $$
## FUFU

Nos colocamos en una línea en el lado de balón.

Primer jugador elige una esquina a la que salir, para que acto seguido, el segundo salga a la esquina contraria.

Después de eso, tercer jugador se gira para hacer un bloqueo indirecto al último jugador, que caerá con todo a aro para intentar recibir y meter canasta.

Si no puede recibir la caída, tenemos esquinas ocupadas para un posible pase y si tenemos espacio, tiro.
$$,
  'https://wwaxcrxmvqejodewmmws.supabase.co/storage/v1/object/public/plays_videos/FUFU.webm',
  'Ofensiva',
  ARRAY['fondo','bloqueos', 'tiradores', 'ventajas'],
  'es',
  true,
  now()
WHERE NOT EXISTS (SELECT 1 FROM public.plays p WHERE p.title = 'FUFU');

COMMIT;

-- Quick check: show titles and whether content_md is populated
SELECT id, title, (content_md IS NOT NULL) AS has_content_md, length(coalesce(content_md, '')) AS content_length
FROM public.plays
ORDER BY created_at DESC
LIMIT 50;
