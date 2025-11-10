import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

export function initPartidosLanguageSync() {
	function updatePageLanguage(lang: Language) {
		const t = translations[lang].partidos;

		// actualizar elementos con data-i18n
		function getByPath(root: any, parts: string[]) {
			let cur = root as any;
			for (const p of parts) {
				if (cur == null) return undefined;
				cur = cur[p];
			}
			return cur;
		}

		document.querySelectorAll('[data-i18n]').forEach(element => {
			const raw = element.getAttribute('data-i18n') || '';
			const parts = raw.split('.').filter(Boolean);
			// try full traversal from top-level translations (e.g. ['partidos','statusValues','por_jugar'])
			let resolved: any = getByPath(translations[lang] as any, parts);
			// If not found, try shorter lookup into t (translations[lang].partidos)
			if (resolved == null && parts.length > 0) {
				const last = parts[parts.length - 1];
				resolved = (t as any)[last];
			}
			if (typeof resolved === 'string') {
				(element as HTMLElement).textContent = resolved as string;
			}
		});

		// elementos que requieren pluralización según un contador: data-i18n-count="namespace.key" y data-count="N"
		document.querySelectorAll('[data-i18n-count]').forEach(element => {
			const raw = element.getAttribute('data-i18n-count') || '';
			const parts = raw.split('.').filter(Boolean);
			const countAttr = element.getAttribute('data-count') || '0';
			const count = parseInt(countAttr, 10) || 0;

			// Try to find <key>Singular / <key>Plural under the same namespace
			let singular = undefined as any;
			let plural = undefined as any;
			if (parts.length > 1) {
				// e.g. ['partidos','won'] -> try translations[lang].partidos.wonSingular
				const prefix = parts.slice(0, -1);
				const key = parts[parts.length - 1];
				singular = getByPath(translations[lang] as any, [...prefix, `${key}Singular`]);
				plural = getByPath(translations[lang] as any, [...prefix, `${key}Plural`]);
			}
			// fallback to non-nested lookups (t.wonSingular / t.won)
			if (singular == null) singular = (t as any)[`${parts[parts.length - 1]}Singular`] ?? (t as any)[parts[parts.length - 1]];
			if (plural == null) plural = (t as any)[`${parts[parts.length - 1]}Plural`] ?? (t as any)[parts[parts.length - 1]];

			(element as HTMLElement).textContent = count === 1 ? (singular ?? '') : (plural ?? '');
		});

		// actualizar outcomes (Ganado / Perdido)
		document.querySelectorAll('.partidos-outcome').forEach(el => {
			const outcome = el.getAttribute('data-outcome');
			const icon = outcome === 'win' ? '✓' : '✕';
			if (outcome === 'win') {
				(el as HTMLElement).innerHTML = `<span class="icon">${icon}</span> ${t.won}`;
			} else if (outcome === 'lose') {
				(el as HTMLElement).innerHTML = `<span class="icon">${icon}</span> ${t.lost}`;
			}
		});

		// actualizar locations vacías
		document.querySelectorAll('.partidos-location').forEach(el => {
			const raw = el.getAttribute('data-location') || '';
			(el as HTMLElement).textContent = raw || t.locationNotSpecified;
		});

		// actualizar fechas (displayDate)
		document.querySelectorAll('[data-date]').forEach(el => {
			const raw = el.getAttribute('data-date') || '';
			if (raw) {
				const date = new Date(raw);
				(el as HTMLElement).textContent = date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', { day: 'numeric', month: lang === 'en' ? 'short' : 'short' });
			}
		});

		// actualizar createdAt
		document.querySelectorAll('[data-created]').forEach(el => {
			const raw = el.getAttribute('data-created') || '';
			if (raw) {
				const date = new Date(raw);
				(el as HTMLElement).textContent = date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES');
			}
		});

		// actualizar teamPerspective usando placeholders
		document.querySelectorAll('[data-our][data-their]').forEach(el => {
			const our = el.getAttribute('data-our') || '';
			const their = el.getAttribute('data-their') || '';
			const tpl = t.teamPerspective || '{our} - {their}';
			(el as HTMLElement).textContent = tpl.replace('{our}', our).replace('{their}', their);
		});
	}

	// aplicar traducción inicial
	const currentLang = (document.documentElement.getAttribute('data-language') || 'es') as Language;
	updatePageLanguage(currentLang);

	// escuchar cambios de idioma
	window.addEventListener('storage', (e) => {
		if ((e as StorageEvent).key === 'language') {
			const newLang = ((e as StorageEvent).newValue as Language) || 'es';
			updatePageLanguage(newLang);
		}
	});

	window.addEventListener('languageChanged', ((e: CustomEvent) => {
		updatePageLanguage(e.detail.language);
	}) as EventListener);
}

// Auto-inicializar si el DOM ya está listo
if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initPartidosLanguageSync);
	} else {
		initPartidosLanguageSync();
	}

	// Soporte para transiciones de Astro
	document.addEventListener('astro:page-load', initPartidosLanguageSync);
}
