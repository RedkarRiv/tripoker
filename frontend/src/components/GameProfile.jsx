import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const GameProfile = ({ type, options, hand = [], isLocked = false }) => {
  const { t } = useTranslation('accountForm');
  const [mounted, setMounted] = useState(false);
  const [cards, setCards] = useState([]);

  // Initialize cards and trigger animation
  useEffect(() => {
    setCards(hand);
    setMounted(true);
  }, [hand]);

  // Split hand into groups of two for visual pairing
  const cardGroups = [];
  cards.forEach((_, idx) => {
    const groupIndex = Math.floor(idx / 2);
    if (!cardGroups[groupIndex]) cardGroups[groupIndex] = [];
    cardGroups[groupIndex].push(cards[idx]);
  });
  const borderClasses = ['border-blue-500', 'border-green-500', 'border-red-500'];

  // Drag & drop handlers
  const handleDragStart = (e, index) => {
    if (isLocked) return;
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = e => {
    if (!isLocked) e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    if (isLocked) return;
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (dragIndex === dropIndex) return;
    const updated = [...cards];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, moved);
    setCards(updated);
  };

  return (
    <div className="w-full h-fit flex flex-col items-center relative rounded-t-3xl">
      {/* Profile Header */}
      <div
        id="profile"
        className="w-full md:max-w-[20rem] w-fit items-center md:h-20 h-24 flex ps-2 bg-slate-800 rounded-3xl my-2"
      >
        <div className="w-1/2 h-fit flex justify-start items-center md:p-4 pr-2">
          <div className="aspect-square md:h-full md:w-auto h-12 w-12 rounded-full bg-red-400" />
          <div className="flex-1 flex flex-col md:justify-center justify-end items-center md:ml-4 mx-5 text-center text-xs w-full px-1">
            <div className="text-white font-semibold uppercase">{type}</div>
            <div className="text-white text-xl font-bold">100</div>
          </div>
        </div>
        <div className="w-px h-[70%] bg-gray-300 mx-2" />
        <div className="w-1/2 h-full flex justify-center items-center">
          <button className="w-fit h-fit px-2 py-1 bg-blue-500 text-white text-sm rounded-xl" disabled={isLocked}>
            {options}
          </button>
        </div>
      </div>

      {/* Hand with draggable cards */}
      <div
        id="hand"
        className="w-full h-full flex md:justify-center justify-around md:gap-4 gap-2 mb-4 relative"
      >
        {cardGroups.map((group, gi) => (
          <div
            key={gi}
            className={`flex items-center gap-1 md:gap-3 p-1 rounded-lg border-2 ${borderClasses[gi]}`}
          >
            {group.map((card, idx) => {
              const globalIndex = gi * 2 + idx;
              return (
                <div
                  key={card.code || globalIndex}
                  draggable={!isLocked}
                  onDragStart={e => handleDragStart(e, globalIndex)}
                  onDragOver={handleDragOver}
                  onDrop={e => handleDrop(e, globalIndex)}
                  className={`relative flex items-center justify-center transition-all duration-500 ease-in-out
                    ${mounted ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 scale-50'}
                  `}
                  style={{ transitionDelay: `${globalIndex * 100}ms` }}
                >
                  {/* Realistic card design */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-700 w-12 h-20 md:w-16 md:h-28 relative p-1 md:p-2">
                    {/* Top-left corner */}
                    <div className={`absolute top-1 left-1 flex flex-col items-start text-xs md:text-sm font-bold ${card.color === 'red' ? 'text-red-600' : 'text-black'}`}>
                      <span>{card.rank}</span>
                      <span>{card.symbol}</span>
                    </div>
                    {/* Bottom-right corner (flipped) */}
                    <div className={`absolute bottom-1 right-1 flex flex-col items-end text-xs md:text-sm font-bold transform rotate-180 ${card.color === 'red' ? 'text-red-600' : 'text-black'}`}
                    >
                      <span>{card.rank}</span>
                      <span>{card.symbol}</span>
                    </div>
                    {/* Center symbol */}
                    <div className="flex-1 flex items-center justify-center">
                      <span className={`text-2xl md:text-4xl ${card.color === 'red' ? 'text-red-600' : 'text-black'}`}>{card.symbol}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameProfile;
