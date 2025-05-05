const suits = [
  { letter: 'S', name: 'spades', symbol: '♠', color: 'black' },
  { letter: 'H', name: 'hearts', symbol: '♥', color: 'red' },
  { letter: 'D', name: 'diamonds', symbol: '♦', color: 'red' },
  { letter: 'C', name: 'clubs', symbol: '♣', color: 'black' },
];

const ranks = [
  { letter: 'A', value: 14, name: 'Ace' },
  { letter: 'K', value: 13, name: 'King' },
  { letter: 'Q', value: 12, name: 'Queen' },
  { letter: 'J', value: 11, name: 'Jack' },
  { letter: '10', value: 10, name: 'Ten' },
  { letter: '9', value: 9, name: 'Nine' },
  { letter: '8', value: 8, name: 'Eight' },
  { letter: '7', value: 7, name: 'Seven' },
  { letter: '6', value: 6, name: 'Six' },
  { letter: '5', value: 5, name: 'Five' },
  { letter: '4', value: 4, name: 'Four' },
  { letter: '3', value: 3, name: 'Three' },
  { letter: '2', value: 2, name: 'Two' },
];

const deck = [];

for (const suit of suits) {
  for (const rank of ranks) {
    deck.push({
      code: `${rank.letter}${suit.letter}`,
      name: `${rank.name} of ${suit.name}`,
      suit: suit.name,
      symbol: suit.symbol,
      color: suit.color,
      rank: rank.letter,
      value: rank.value,
    });
  }
}

export default deck;