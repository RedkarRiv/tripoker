// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Busca todos los archivos de traducción (sin cargarlos aún)
const modules = import.meta.glob('./locales/*/*.js');

// 🔁 Extrae idiomas y namespaces desde los paths
const availableNamespaces = {};
for (const path in modules) {
  const match = path.match(/\.\/locales\/([^\/]+)\/(.+)\.js$/);
  if (!match) continue;
  const [, lng, ns] = match;
  availableNamespaces[lng] = availableNamespaces[lng] || new Set();
  availableNamespaces[lng].add(ns);
}

// Convertir Sets a arrays
Object.keys(availableNamespaces).forEach(
  (lng) => (availableNamespaces[lng] = Array.from(availableNamespaces[lng]))
);

// Inicialización básica
i18n
  .use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'en',
    defaultNS: 'home',
    interpolation: { escapeValue: false },  
    resources: {},
  });

// 👇 Carga perezosa por idioma y namespace
export const loadNamespace = async (lng, ns) => {
  const path = `./locales/${lng}/${ns}.js`;
  const loader = modules[path];
  if (loader && !i18n.hasResourceBundle(lng, ns)) {
    const mod = await loader();
    i18n.addResourceBundle(lng, ns, mod.default);
  }
};

// 👇 Opción útil si quieres precargar todos los namespaces de un idioma
export const preloadLanguage = async (lng) => {
  const namespaces = availableNamespaces[lng] || [];
  await Promise.all(namespaces.map((ns) => loadNamespace(lng, ns)));
};

export { availableNamespaces };
export default i18n;