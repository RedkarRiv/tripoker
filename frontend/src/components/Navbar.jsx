import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import _get from 'lodash/get';
import _map from 'lodash/map';
import categories from '@data/categories';
import LanguageSwitcher from './LanguageSwitcher';
import pokerHandIcon from '@public/icons/poker_hand.svg';
import logoutIcon from '@public/icons/logout.svg';
import { logout } from '@features/auth/authSlice';

const Navbar = ({ onToggle }) => {
  const { t } = useTranslation('navbar')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => _get(state, "auth.isAuthenticated"));
  const isMobile = useSelector((state) => _get(state, "viewport.isMobile"));

  const [isOpen, setIsOpen] = useState(() => {
    return !isMobile;
  });

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };


  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-full bg-black text-white md:w-48 w-48 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <button
          onClick={toggleNavbar}
          className="pt-1 px-2 text-white text-white text-xs rounded-full shadow-lg absolute right-0"
        >
          X
        </button>
        <div className="flex flex-col h-full p-4 items-end">
          {/* Botón de toggle para la barra */}


          {/* Logo */}
          <div className="flex-none mb-8 w-full pt-8">
            <div className="w-fit h-10 rounded-sm mx-auto flex gap-2 justify-center items-center">
              <img src={pokerHandIcon} alt="Party icon" className="w-16 invert" /> {t('brand')}
            </div>
          </div>

          {/* Menú de categorías */}
          <div className="mt-4 flex flex-col justify-center gap-4 items-start w-full">
            {_map(categories, (cat) =>
              _get(cat, 'status') === 'active' ? (
                <Link
                  key={_get(cat, 'name')}
                  to={_get(cat, 'url')}
                  className="w-full font-medium transition-colors flex justify-center items-center gap-2 border-b-[1px] hover:bg-primaryColor hover:rounded px-2"
                >
                  <img src={_get(cat, 'icon')} alt="Party icon" className="invert w-6" />
                  <div className="size-full pt-1">
                    {t(_get(cat, 'name'))}
                  </div>
                </Link>
              ) : null
            )}
          </div>

          {/* Área de usuario */}
          <div className="flex justify-around items-center mt-auto gap-2 w-full">
            {isAuthenticated ?
              <div className="flex justify-between w-fit gap-2">
                <Link to="/account" className="text-base font-medium hover:bg-primaryColor rounded px-2 py-1">{t('account')}</Link>
                <div className="hover:bg-primaryColor p-1 flex justify-center rounded cursor-pointer" onClick={handleLogout}>
                  <img src={logoutIcon} alt="Party icon" className="w-5 invert" />
                </div>
              </div>
              :
              <Link to="/register" className="text-base font-medium hover:bg-primaryColor rounded px-2 py-1">{t('login')}</Link>
            }
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
          className="fixed md:top-4 md:left-4 top-2 left-2 text-white bg-black h-8 w-8 rounded-full shadow-lg z-10"
        >
          <span className="text-md">☰</span> {/* Ícono de hamburguesa */}
        </button>
      )}
    </>
  );
};

export default Navbar;
