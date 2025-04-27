// src/components/LanguageSwitcher.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();     
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);

  const currentLang = i18n.language || 'es';
  const allLanguages = Object.keys(i18n.options.resources);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={switcherRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {currentLang.toUpperCase()}
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
                {lng.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
