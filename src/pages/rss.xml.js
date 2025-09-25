import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import jornadas from '../data/jornadas.json';

export async function GET(context) {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: jornadas.map((jornada) => ({
			title: jornada.title,
			description: jornada.description,
			pubDate: new Date(jornada.pubDate),
			link: `/jornadas/${jornada.slug}/`,
		})),
	});
}
