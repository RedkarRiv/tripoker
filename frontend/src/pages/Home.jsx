import React from 'react';
import { useTranslation } from 'react-i18next';
import bannerHomePoker from '@public/banner_home_poker.webp';
import dealerIcon      from '@public/icons/dealer_poker.svg';
import pokerCircleIcon from '@public/icons/poker_circle.svg';
import pokerTokenIcon  from '@public/icons/poker_token.svg';
import pokerFriendIcon from '@public/icons/poker_friend.svg';

const Home = ({ inheritClass }) => {
  const { t } = useTranslation('home')
  return (
    <div className={`${inheritClass} w-full min-h-screen h-fit bg-secondaryColor flex items-center justify-start justify-around flex-col pt-2`}>
      <div className="w-full md:h-96 md:px-24 md:px-6 pt-6 flex justify-center">
        <img
          src={bannerHomePoker}
          alt="Banner poker"
          className="w-fit h-full object-contain md:rounded-xl"
        />
      </div>
      <div className="flex md:mt-12 gap-12 flex-wrap justify-center items-center">
        <div className="md:w-48 md:h-48 w-32 h-32 bg-black rounded-lg text-center hover:bg-slate-950 cursor-pointer flex flex-col justify-between">
          <img src={dealerIcon} alt="Party icon" className="invert w-full h-3/4 p-4" />
          <span className="text-white bold pb-4">CREAR MESA</span>
        </div>  
        <div className="md:w-48 md:h-48 w-32 h-32 bg-black rounded-lg text-center hover:bg-slate-950 cursor-pointer flex flex-col justify-between">
          <img src={pokerCircleIcon} alt="Party icon" className="invert w-full h-3/4 p-4" />
          <span className="text-white bold pb-4">VER MESAS</span>
        </div>
        <div className="md:w-48 md:h-48 w-32 h-32 bg-black rounded-lg text-center hover:bg-slate-950 cursor-pointer flex flex-col justify-between">
          <img src={pokerTokenIcon} alt="Party icon" className="invert w-full h-3/4 p-4" />
          <span className="text-white bold pb-4">CARTERA</span>
        </div>
        <div className="md:w-48 md:h-48 w-32 h-32 bg-black rounded-lg text-center hover:bg-slate-950 cursor-pointer flex flex-col justify-between">
          <img src={pokerFriendIcon} alt="Party icon" className="invert w-full h-3/4 p-4" />
          <span className="text-white bold pb-4">AMIGOS</span>
        </div>
      </div>
    </div>
  );
};

export default Home;