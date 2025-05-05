import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import _get from 'lodash/get';
import GameBoard from '@components/GameBoard.jsx';
import GameProfile from '@components/GameProfile.jsx';
import deck from '../data/mazo.js';

const Room = ({ inheritClass }) => {
  const { t } = useTranslation('room')

  const  shuffle = (array) => {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  const [botHand, setBotHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [remainingDeck, setRemainingDeck] = useState([]);


  useEffect(() => {
    // On mount: shuffle and deal
    const newDeck = shuffle([...deck]);
    const botCards = newDeck.splice(0, 6);
    const playerCards = newDeck.splice(0, 6);
  
    setBotHand(botCards);
    setPlayerHand(playerCards);
    setRemainingDeck(newDeck);
  }, []);

  return (
    <div className={`${inheritClass} w-full min-h-screen h-screen bg-secondaryColor flex items-center justify-start flex-col md:pb-8 md:pt-0 overflow-x-hidden relative`}>
      <div className="w-full h-full lg:max-w-[75rem] flex flex-col md:px-24 md:pt-12 justify-between items-center gap-2 pt-10 px-2">
        <GameProfile type="BOT" options="Configurar" hand={botHand}/>
        <GameBoard />
        <GameProfile type="player" options="Confirmar jugada" hand={playerHand}/>
      </div>
    </div>
  );
};

export default Room