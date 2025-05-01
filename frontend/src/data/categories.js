import homeIcon from '@public/icons/home_poker.svg';
import rankIcon from '@public/icons/ranking_poker.svg';
import rulesIcon from '@public/icons/rules_poker.svg';
import statsIcon from '@public/icons/statistics_poker.svg';

const categories = [
  {
    name: 'home',
    status: 'active',
    url: '/',
    icon: homeIcon
  },
  {
    name: 'rules',
    status: 'active',
    url: '/rules',
    icon: rulesIcon
  },
  {
    name: 'ranking',
    status: 'active',
    url: '/ranking',
    icon: rankIcon
  },
  {
    name: 'stats',
    status: 'active',
    url: '/statistics',
    icon: statsIcon
  }
];

export default categories;