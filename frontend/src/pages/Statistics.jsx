import React from 'react';
import { useTranslation } from 'react-i18next';

const Statistics = ({ inheritClass }) => {
  const { t } = useTranslation('statistics')

  return (
    <div className={`${inheritClass} w-full h-fit min-h-screen bg-secondaryColor flex items-center justify-center flex-col`}>
      <h1 className="text-5xl font-bold text-white p-3">Stats</h1>
    </div>
  );
};

export default Statistics