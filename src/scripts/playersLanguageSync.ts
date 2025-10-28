import { getTranslations, type Language } from '../i18n/translations';

// Función para convertir metros a pies y pulgadas
function metersToFeetInches(meters: number): string {
	const totalInches = meters * 39.3701;
	const feet = Math.floor(totalInches / 12);
	const inches = Math.round(totalInches % 12);
	return `${feet}'${inches}"`;
}

export function initPlayersLanguageSync() {
	// Detectar el idioma actual
	const currentLang = (localStorage.getItem('language') as Language) || 'es';
	
	// Aplicar traducciones iniciales
	updatePlayerTranslations(currentLang);
	
	// Escuchar cambios en el idioma
	window.addEventListener('storage', (e) => {
		if (e.key === 'language') {
			const newLang = (e.newValue as Language) || 'es';
			updatePlayerTranslations(newLang);
		}
	});
	
	// Escuchar eventos personalizados de cambio de idioma
	window.addEventListener('languageChanged', ((e: CustomEvent) => {
		updatePlayerTranslations(e.detail.language);
	}) as EventListener);
}

function updatePlayerTranslations(lang: Language) {
	const t = getTranslations(lang);
	
	// Actualizar textos con data-i18n
	document.querySelectorAll('[data-i18n]').forEach((element) => {
		const key = element.getAttribute('data-i18n');
		if (key) {
			const keys = key.split('.');
			let value: any = t;
			
			for (const k of keys) {
				value = value[k];
				if (!value) break;
			}
			
			if (value && typeof value === 'string') {
				element.textContent = value;
			}
		}
	});
	
	// Actualizar posiciones
	document.querySelectorAll('[data-position]').forEach((element) => {
		const position = element.getAttribute('data-position');
		if (position) {
			const translatedPosition = t.players.positions[position as keyof typeof t.players.positions];
			if (translatedPosition) {
				element.textContent = translatedPosition;
			}
		}
	});
	
	// Actualizar alturas
	document.querySelectorAll('[data-height]').forEach((element) => {
		const heightStr = element.getAttribute('data-height');
		if (heightStr) {
			const meters = parseFloat(heightStr);
			if (!isNaN(meters)) {
				if (lang === 'en') {
					element.textContent = metersToFeetInches(meters);
				} else {
					element.textContent = `${meters} m`;
				}
			}
		}
	});
	
	// Actualizar fechas de cumpleaños
	document.querySelectorAll('[data-date]').forEach((element) => {
		const dateStr = element.getAttribute('data-date');
		if (dateStr) {
			const date = new Date(dateStr);
			const formatted = date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', {
				day: 'numeric',
				month: lang === 'en' ? 'short' : 'long'
			});
			element.textContent = formatted;
		}
	});
}
