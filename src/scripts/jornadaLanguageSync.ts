import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

export function initJornadaLanguageSync() {
	function updatePageLanguage(lang: Language) {
		const t = translations[lang].jornadas;
		
		// Actualizar elementos con data-i18n
		document.querySelectorAll('[data-i18n]').forEach(element => {
			const key = element.getAttribute('data-i18n') as keyof typeof t;
			if (key && t[key]) {
				const translation = t[key] as string;
				element.textContent = translation;
			}
		});
		
		// Actualizar etiquetas de las cards móviles
		document.querySelectorAll('.stat-label').forEach(label => {
			const text = label.textContent?.trim();
			if (text === 'Puntos:' || text === 'Points:') label.textContent = t.pointsLabel;
			else if (text === 'Valoración:' || text === 'Rating:') label.textContent = t.ratingLabel;
			else if (text === 'T2:' || text === '2PT:') label.textContent = t.t2 + ':';
			else if (text === 'T3:' || text === '3PT:') label.textContent = t.t3 + ':';
			else if (text === 'TL:' || text === 'FT:') label.textContent = t.freeThrows;
			else if (text === 'Assists:') label.textContent = t.assistsLabel;
			else if (text === 'Rebotes:' || text === 'Rebounds:') label.textContent = t.reboundsLabel;
			else if (text === 'Robos:' || text === 'Steals:') label.textContent = t.stealsLabel;
			else if (text === 'Pérdidas:' || text === 'Turnovers:') label.textContent = t.turnoversLabel;
			else if (text === 'Faltas:' || text === 'Fouls:') label.textContent = t.foulsLabel;
		});
		
		// Actualizar badges de ausente
		document.querySelectorAll('.ausente-badge').forEach(badge => {
			badge.textContent = t.absent;
		});
	}
	
	// Sincronizar idioma al cargar
	const currentLang = (document.documentElement.getAttribute('data-language') || 'es') as Language;
	updatePageLanguage(currentLang);
	
	// Escuchar cambios de idioma
	document.addEventListener('click', (e) => {
		const target = e.target as HTMLElement;
		const button = target.closest('.language-toggle-btn');
		
		if (button) {
			setTimeout(() => {
				const newLang = (document.documentElement.getAttribute('data-language') || 'es') as Language;
				updatePageLanguage(newLang);
			}, 50);
		}
	});
}

// Auto-inicializar si el DOM ya está listo
if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initJornadaLanguageSync);
	} else {
		initJornadaLanguageSync();
	}
	
	// Soporte para transiciones de Astro
	document.addEventListener('astro:page-load', initJornadaLanguageSync);
}
