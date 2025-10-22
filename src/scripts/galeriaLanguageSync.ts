import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

export function initGaleriaLanguageSync() {
	function updatePageLanguage(lang: Language) {
		const t = translations[lang].galeria;
		
		// Actualizar título de la página
		document.title = t.pageTitle + ' - JunStats';
		
		// Actualizar elementos con data-i18n
		document.querySelectorAll('[data-i18n]').forEach(element => {
			const key = element.getAttribute('data-i18n') as keyof typeof t;
			if (key && t[key]) {
				const translation = t[key] as string;
				element.textContent = translation;
			}
		});
		
		// Actualizar títulos y descripciones de álbumes
		document.querySelectorAll('.album-card').forEach(card => {
			const albumId = card.getAttribute('data-album-id');
			if (!albumId) return;
			
			// Convertir "vs-torrejon" a "albumVsTorrejon"
			const camelCaseId = 'album' + albumId.split('-').map(word => 
				word.charAt(0).toUpperCase() + word.slice(1)
			).join('');
			
			const titleKey = camelCaseId as keyof typeof t;
			const descKey = (camelCaseId + 'Desc') as keyof typeof t;
			
			const title = card.querySelector('.album-title');
			const description = card.querySelector('.album-description');
			
			if (title && t[titleKey]) {
				title.textContent = t[titleKey] as string;
			}
			if (description && t[descKey]) {
				description.textContent = t[descKey] as string;
			}
		});
	}
	
	// Sincronizar idioma al cargar
	const savedLang = localStorage.getItem('language') as Language;
	const currentLang = (savedLang || document.documentElement.getAttribute('data-language') || 'es') as Language;
	updatePageLanguage(currentLang);
	
	// Escuchar cambios de idioma
	document.addEventListener('click', (e) => {
		const target = e.target as HTMLElement;
		const button = target.closest('.language-toggle-btn');
		
		if (button) {
			setTimeout(() => {
				const savedLang = localStorage.getItem('language') as Language;
				const newLang = (savedLang || document.documentElement.getAttribute('data-language') || 'es') as Language;
				updatePageLanguage(newLang);
			}, 50);
		}
	});
}

// Auto-inicializar si el DOM ya está listo
if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initGaleriaLanguageSync);
	} else {
		initGaleriaLanguageSync();
	}
	
	// Soporte para transiciones de Astro
	document.addEventListener('astro:page-load', initGaleriaLanguageSync);
}
