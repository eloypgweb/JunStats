// @ts-check

import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://junstats.vercel.app/',
	// Usar salida en modo servidor y registrar el adaptador de Vercel
	output: 'server',
	adapter: vercel(),
	integrations: [tailwind(), mdx(), sitemap()],
});
