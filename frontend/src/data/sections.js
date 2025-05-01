import dealerIcon      from '@public/icons/dealer_poker.svg';
import pokerCircleIcon from '@public/icons/poker_circle.svg';
import pokerTokenIcon  from '@public/icons/poker_token.svg';
import pokerFriendIcon from '@public/icons/poker_friend.svg';

const sections = [
  {
    name: 'createRoom',
    status: 'active',
    url: '/createRoom',
    icon: dealerIcon
  },
  {
    name: 'rooms',
    status: 'active',
    url: '/rooms',
    icon: pokerCircleIcon
  },
  {
    name: 'budget',
    status: 'active',
    url: '/budget',
    icon: pokerTokenIcon
  },
  {
    name: 'friends',
    status: 'active',
    url: '/friends',
    icon: pokerFriendIcon
  }
];

export default sections;