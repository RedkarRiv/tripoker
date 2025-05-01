import React from 'react';
import { useTranslation } from 'react-i18next';

const Rules = ({ inheritClass }) => {
  const { t } = useTranslation('party')

  return (
    <div className={`${inheritClass} w-full h-screen bg-red-100 flex items-center justify-center flex-col pt-[4rem]`}>
      <h1 className="text-5xl font-bold text-red-900 p-3">Rules</h1>
      <p>{t('welcome')}</p>
    </div>
  );
};

export default Rules