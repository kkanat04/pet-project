import Menu from '~/pages/Menu/Menu';
import TrafficSources from '~/pages/TrafficSources/TrafficSources';

export const navigationData = [
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/trafficSources',
    element: <TrafficSources />,
  },
];

export const adv_source = {
  id: 'id',
  timestamp: 1681079157000,
  name: 'Name',
  description: 'Description long',
  utmSource: 'utm метка source',
  utmCompaign: 'utm метка compaign',
  type: 'BLOGGER',
};

export const bloger = {
  id: '2',
  id_adv: '2',
  timestamp: 1681079157000,
  timestampPublished: 1681079157000,
  name: 'Name',
  description: 'Description long',
  published: true,
  paid: true,
  link: 'https://ru.hexlet.io/blog/posts/react-router-v6',
  goal: 'wwwwwwww',
  conditions: 'Условия',
  network: 'ERC20',
  priceUsd: '2323.34',
  comment: 'Комментарий',
  discordLink: 'https://ru.hexlet.io/blog/posts/react-router-v6',
  transactionHash: 'dwed2232',
};

export const advertising = {
  id: 'id',
  id_adv: 'id из таблицы adv_source',
  timestamp: 1681079157000,
  timestampPublished: 1681079157000,
  name: 'Name',
  description: 'Description long',
  published: false,
};
