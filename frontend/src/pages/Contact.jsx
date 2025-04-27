import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact')
  
  return (
    <div className="w-full h-screen bg-yellow-100 flex items-center justify-center flex-col  pt-[4rem]">
      <h1 className="text-5xl font-bold text-yellow-900 p-3">{t('title')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
};

export default Contact;