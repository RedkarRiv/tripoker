import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '@data/categories';
import _get from 'lodash/get';
import _map from 'lodash/map';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(() => {
    const isMobile = window.innerWidth < 768;  // TODO react-responsive || react-devide-detect
    return !isMobile;
  });

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-full bg-tertiaryColor text-white md:w-48 w-48 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4 items-end">
          {/* Botón de toggle para la barra */}
          <button
            onClick={toggleNavbar}
            className="mb-4 text-white bg-primaryColor hover:bg-primaryColorHover px-2 rounded-full shadow-lg"
          >
            X
          </button>

          {/* Logo */}
          <div className="flex-none mb-8 w-full">
            <div className="w-24 h-10 bg-blue-900 rounded-sm mx-auto" />
          </div>

          {/* Menú de categorías */}
          <div className="flex-1 flex flex-col justify-center gap-2 space-y-4 items-start w-full">
            {_map(categories, (cat) =>
              _get(cat, 'status') === 'active' ? (
                <Link
                  key={_get(cat, 'name')}
                  to={_get(cat, 'url')}
                  className="text-base font-medium hover:text-blue-200 transition-colors"
                >
                  {_get(cat, 'name')}
                </Link>
              ) : null
            )}
          </div>

          {/* Área de usuario */}
          <div className="flex justify-between items-start mt-auto gap-2 w-full">
            <a
              href="/login"
              className="text-base font-medium hover:text-blue-200 transition-colors"
            >
              Login
            </a>
            <div className="relative">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Botón para abrir la navbar si está cerrada */}
      {!isOpen && (
        <button
          onClick={toggleNavbar}
          className="fixed top-4 left-4 text-white bg-primaryColor hover:bg-primaryColorHover px-2 rounded-full shadow-lg z-49"
        >
          <span className="text-xl">☰</span> {/* Ícono de hamburguesa */}
        </button>
      )}
    </>
  );
};

export default Navbar;
