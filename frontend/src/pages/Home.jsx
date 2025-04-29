import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = ({ inheritClass }) => {
  const { t } = useTranslation('home')
  return (
    <div className={`${inheritClass} w-full min-h-screen h-fit bg-secondaryColor flex items-center justify-start flex-col pt-2`}>
      <h1 className="md:text-5xl font-bold text-fontPrimaryColor p-3">{t('welcome')}</h1>
     {/*  Slider claim */}
      <div className="flex flex-col md:flex-row w-full md:h-64 h-full md:px-24 px-6">
        <div className="md:w-1/2 w-full md:h-64 h-32 bg-red-200">
        </div>
        <div className="md:w-1/2 w-full md:h-64 h-fit bg-blue-200 flex flex-col justify-start items-center md:p-6 p-4">
          <h2 className="text-white md:text-3xl font-bold text-center">Titulo del claim</h2>
          <p className="my-auto text-center md:text-md text-xs">Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum</p>
          <div className="flex gap-6 mt-5">
            <button className="rounded bg-primaryColor w-fit px-3 py-1 text-bold text-white">Go sit&go</button>
            <button className="rounded bg-primaryColor w-fit px-3 py-1 text-bold text-white">Go cash</button>
          </div>
        </div>
      </div>

      <div className="flex mt-12 gap-12 flex-wrap justify-center items-center">
        <div className="md:w-48 md:h-48 w-24 h-24 bg-yellow-200 rounded text-center">Party</div>
        <div className="md:w-48 md:h-48 w-24 h-24 bg-yellow-200 rounded text-center">Party</div>
        <div className="md:w-48 md:h-48 w-24 h-24 bg-yellow-200 rounded text-center">Party</div>
        <div className="md:w-48 md:h-48 w-24 h-24 bg-yellow-200 rounded text-center">Party</div>
      </div>
    </div>
  );
};

export default Home;