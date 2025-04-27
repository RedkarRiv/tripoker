// src/components/LanguageSwitcher.jsx
import React, { useState } from 'react';
import i18n, { preloadLanguage, availableNamespaces } from '../i18n';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language || 'es';

  // Detecta los idiomas disponibles de forma dinámica
  const allLanguages = Object.keys(availableNamespaces);

  const changeLanguage = async (lng) => {
    setIsOpen(false);
    await preloadLanguage(lng);
    await i18n.changeLanguage(lng);
  };

  return (
    <div
      className="relative inline-block text-left"
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {currentLang}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-24 bg-white border rounded shadow z-50">
          {allLanguages
            .filter((lng) => lng !== currentLang)
            .map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {lng}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
