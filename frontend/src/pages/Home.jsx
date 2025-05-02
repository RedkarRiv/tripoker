import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _map from 'lodash/map';
import _get from 'lodash/get';
import sections from '@data/sections';
import bannerHomePoker from '@public/banner_home_poker.webp';


const Home = ({ inheritClass }) => {
  const { t } = useTranslation('home')
  const isAuthenticated = useSelector((state) => _get(state, "auth.isAuthenticated"));

  return (
    <div className={`${inheritClass} w-full min-h-screen h-fit bg-secondaryColor flex items-center justify-start justify-around flex-col pt-2`}>
      <div className="w-full md:h-96 md:px-24 md:px-6 pt-6 flex justify-center">
        <img
          src={bannerHomePoker}
          alt="Banner poker"
          className="w-fit h-full object-contain md:rounded-xl"
        />
      </div>

      {/* Menú de secciones */}
      <div className="flex md:mt-12 gap-12 flex-wrap justify-center items-center">
        {_map(sections, (section) => {
          const requiresAuth = _get(section, 'auth', false);
          const isActive = _get(section, 'status') === 'active';
          if (!isActive) return null;
          if (requiresAuth && !isAuthenticated) return null;
          return (
            <Link
              key={_get(section, 'name')}
              to={_get(section, 'url')}
              className="md:w-48 md:h-48 w-32 h-32 bg-transparent border rounded-lg text-center hover:bg-tertiaryColor hover:border-primaryColor cursor-pointer flex flex-col justify-between"
            >
              <img src={_get(section, 'icon')} alt="Party icon" className="invert w-full h-3/4 p-4" />
              <span className="text-white bold pb-4 uppercase">
                {t(_get(section, 'name'))}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;