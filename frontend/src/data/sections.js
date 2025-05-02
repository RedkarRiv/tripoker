import dealerIcon      from '@public/icons/dealer_poker.svg';
import pokerCircleIcon from '@public/icons/poker_circle.svg';
import pokerTokenIcon  from '@public/icons/poker_token.svg';
import pokerFriendIcon from '@public/icons/poker_friend.svg';

const sections = [
  {
    name: 'createRoom',
    status: 'active',
    url: '/createRoom',
    icon: dealerIcon,
    auth: false
  },
  {
    name: 'rooms',
    status: 'active',
    url: '/rooms',
    icon: pokerCircleIcon,
    auth: false
  },
  {
    name: 'budget',
    status: 'active',
    url: '/budget',
    icon: pokerTokenIcon,
    auth: false
  },
  {
    name: 'friends',
    status: 'active',
    url: '/friends',
    icon: pokerFriendIcon,
    auth: true
  }
];

export default sections;