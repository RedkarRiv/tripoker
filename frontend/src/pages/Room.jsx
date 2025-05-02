import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _get from 'lodash/get';
import pokerTable from '@public/poker_table.png'

const Room = ({ inheritClass }) => {
  const { t } = useTranslation('room')
  const isMobile = useSelector((state) => _get(state, "viewport.isMobile"));

  return (
    <div className={`${inheritClass} w-full min-h-screen h-screen bg-secondaryColor flex items-center justify-start flex-col py-8`}>
      <div className="w-full h-full md:px-24 flex justify-center gap-6">
        <div className="h-full flex flex-col justify-between">
          <img
            src={pokerTable}
            alt="Banner poker"
            className="md:h-[35rem] p-8 object-contain md:rounded-xl"
          />
          <div className="bg-red-400 w-full h-content rounded flex flex-wrap px-6 py-2 justify-around items-center">
            <span className="px-2 my-2 md:my-0 h-fit rounded text-white cursor-pointer hover:bg-blue-900 bg-blue-700">FOLD</span>
            <span className="px-2 my-2 md:my-0 h-fit rounded text-white cursor-pointer hover:bg-blue-900 bg-blue-700">CALL</span>
            <span className="px-2 my-2 md:my-0 h-fit rounded text-white cursor-pointer hover:bg-blue-900 bg-blue-700">RAISE</span>
            <input
              type="number"
              name="amount"
              placeholder="Raise amount"
              className="h-8 w-full md:w-fit rounded border p-2"
            />

          </div>
        </div>
        {!isMobile &&
          <div className="bg-red-400 w-64 h-full rounded flex flex-col">
            <div className="flex h-full bg-gray-500 m-2 rounded">Screen</div>
            <div className="h-32 flex justify-around items-center p-2 relative">
              <textarea
                type="text"
                name="amount"
                placeholder="Message"
                className="h-full w-full text-xs text-start rounded p-2 resize-none"
              />
              <button className="bg-emerald-600 hover:bg-emerald-800 cursor-pointer px-1 rounded text-white absolute right-0 bottom-0 mr-3 mb-3">➤</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Room