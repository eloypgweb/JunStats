import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

export function initPartidosLanguageSync() {
	function updatePageLanguage(lang: Language) {
		const t = translations[lang].partidos;

		// actualizar elementos con data-i18n
		document.querySelectorAll('[data-i18n]').forEach(element => {
			const key = element.getAttribute('data-i18n') as keyof typeof t;
			if (key && (t as any)[key]) {
				(element as HTMLElement).textContent = (t as any)[key] as string;
			}
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
