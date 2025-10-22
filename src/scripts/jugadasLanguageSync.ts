import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

export function initJugadasLanguageSync() {
	function updatePageLanguage(lang: Language) {
		const t = translations[lang].jugadas;
		
		// Actualizar título de la página
		document.title = t.pageTitle + ' | JunStats';
		
		// Actualizar elementos con data-i18n
		document.querySelectorAll('[data-i18n]').forEach(element => {
			const key = element.getAttribute('data-i18n') as keyof typeof t;
			if (key && t[key]) {
				const translation = t[key] as string;
				
				// Para elementos <b>, solo actualizar el contenido de texto
				if (element.tagName === 'B') {
					element.textContent = translation;
				} else {
					element.textContent = translation;
				}
			}
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
		document.addEventListener('DOMContentLoaded', initJugadasLanguageSync);
	} else {
		initJugadasLanguageSync();
	}
	
	// Soporte para transiciones de Astro
	document.addEventListener('astro:page-load', initJugadasLanguageSync);
}
