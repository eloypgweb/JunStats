import type { Language } from './translations';

// Función para obtener el idioma desde las cookies o el localStorage
export function getCurrentLanguage(): Language {
  // En el servidor, por defecto español
  if (typeof window === 'undefined') {
    return 'es';
  }
  
  // En el cliente, leer del localStorage
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    return savedLang;
  }
  
  return 'es';
}
