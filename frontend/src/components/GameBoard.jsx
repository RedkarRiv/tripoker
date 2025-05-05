import React from 'react';
import { useTranslation } from 'react-i18next';
import _get from 'lodash/get';

const GameBoard = () => {
  const { t } = useTranslation('accountForm');

  const handClass = 'h-12 w-8 md:h-24 md:w-14 rounded border-2 border-box'
  return (
    <div id="table" className="w-full h-full flex flex-col justify-center">
    <div className="w-full h-fit max-w-[100vw] flex items-start bg-slate-800 md:p-2 p-1 md:gap-4 md:my-auto py-4 md:py-12 rounded-lg">
      <div className="w-full flex flex-col gap-3">
        <div id="flop" className="flex md:gap-3 gap-2 justify-center">
          <div className="flex justify-center gap-1 w-full">
            <div className={`${handClass} bg-green-500`}></div>
            <div className={`${handClass} bg-green-500`}></div>
          </div>
          <div className="w-fit flex gap-1 ">
            <div className={`${handClass} border-green-500`}></div>
            <div className={`${handClass} border-green-500`}></div>
            <div className={`${handClass} border-green-500`}></div>
            <div className={`${handClass} border-green-500`}></div>
            <div className={`${handClass} border-green-500`}></div>
          </div>
          <div className="flex justify-center gap-1 w-full">
            <div className={`${handClass} bg-green-500`}></div>
            <div className={`${handClass} bg-green-500`}></div>
          </div>
        </div>
        <div id="flop2" className="flex md:gap-3 gap-2 justify-center">
          <div className="flex justify-center gap-1 w-full">
            <div className={`${handClass} bg-red-500`}></div>
            <div className={`${handClass} bg-red-500`}></div>
          </div>
          <div className="w-fit flex gap-1 ">
            <div className={`${handClass} border-red-500`}></div>
            <div className={`${handClass} border-red-500`}></div>
            <div className={`${handClass} border-red-500`}></div>
            <div className={`${handClass} border-red-500`}></div>
            <div className={`${handClass} border-red-500`}></div>
          </div>
          <div className="flex justify-center gap-1 w-full">
            <div className={`${handClass} bg-red-500`}></div>
            <div className={`${handClass} bg-red-500`}></div>
          </div>
        </div>
        <div id="flop3" className="flex md:gap-3 gap-2 justify-center">
          <div className="flex justify-center gap-1 w-full">
            <div className={`${handClass} bg-blue-500`}></div>
            <div className={`${handClass} bg-blue-500`}></div>
          </div>
          <div className="w-fit flex gap-1 ">
            <div className={`${handClass} border-blue-500`}></div>
            <div className={`${handClass} border-blue-500`}></div>
            <div className={`${handClass} border-blue-500`}></div>
            <div className={`${handClass} border-blue-500`}></div>
            <div className={`${handClass} border-blue-500`}></div>
          </div>
          <div className="flex justify-center gap-1 w-full">
            <div className={`${handClass} bg-blue-500`}></div>
            <div className={`${handClass} bg-blue-500`}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GameBoard;
