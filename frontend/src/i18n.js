// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Carga sincrónica de todos los archivos de traducción con Vite
// Usamos import.meta.glob con { eager: true } para asegurar que se lean todos los módulos
const modules = import.meta.glob('./locales/*/*.js', { eager: true });

// Construir el objeto resources a partir de los módulos cargados
const resources = {};
for (const path in modules) {
  const match = path.match(/\.\/locales\/(?<lng>[^\/]+)\/(?<ns>.+)\.js$/);
  if (!match) continue;
  const { lng, ns } = match.groups;
  resources[lng] = resources[lng] || {};
  resources[lng][ns] = modules[path].default;
}

// Inicializar i18next con todas las traducciones pre-cargadas
i18n
  .use(initReactI18next)
  .init({
    resources,             // ya incluye todos los idiomas y namespaces
    lng: 'es',             // idioma por defecto
    fallbackLng: 'en',     // idioma de reserva
    defaultNS: 'home',     // namespace por defecto
    interpolation: { escapeValue: false },
  });

// Exportar namespaces disponibles (opcional)
export const availableNamespaces = Object.fromEntries(
  Object.entries(resources).map(([lng, nss]) => [lng, Object.keys(nss)])
);

export default i18n;
