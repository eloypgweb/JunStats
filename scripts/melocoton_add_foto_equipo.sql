-- scripts/melocoton_add_foto_equipo.sql
-- Adds foto_equipo column to public.games to store a logo/image URL for the opponent/team.

BEGIN;

ALTER TABLE public.games
  ADD COLUMN IF NOT EXISTS foto_equipo text;

COMMIT;

-- Example: update a team logo (replace URL with your storage public URL)
-- UPDATE public.games SET foto_equipo = 'https://<project>.supabase.co/storage/v1/object/public/team_logos/torrejon.png' WHERE opponent = 'Basket Torrejón Azul';
