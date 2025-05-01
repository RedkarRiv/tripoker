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
    <div ref={switcherRef} className="relative inline-block text-left shadow">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="py-1 px-3 bg-secondaryColor rounded hover:bg-tertiaryColorHover  h-auto text-xs min-w-[3rem]"
      >
        {currentLang.toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 size-auto bg-transparent rounded shadow z-50 text-xs flex flex-col gap-1 bg-transparent">
          {allLanguages
            .filter((lng) => lng !== currentLang)
            .map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className="block w-full py-1 px-3 bg-tertiaryColor rounded hover:bg-tertiaryColorHover h-auto text-xs min-w-[3rem] border"
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
