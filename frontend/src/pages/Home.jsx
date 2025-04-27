import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <div className="w-full h-screen bg-green-100 flex items-center justify-center flex-col pt-[4rem]">
      <h1 className="text-5xl font-bold text-green-900 p-3">{t('title')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
};

export default Home;