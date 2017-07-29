const stickers = [
  { id: 1,
    title: 'Javascript',
    description: 'The frontend language.',
    rating: 3,
    url: 'http://www.javascript.com' },
  { id: 2,
    title: 'NodeJS',
    description: 'Use the JS in the server side.',
    rating: 5,
    url: 'http://www.nodejs.org' },
  { id: 3,
    title: 'ReactJS',
    description: 'Frontend framework from Facebook',
    rating: 6,
    url: 'http://www.reactjs.com' },
  { id: 4,
    title: 'Mobx',
    description: 'Solution for data store',
    rating: 8,
    url: 'http://www.mobxjs.io' },
  { id: 5,
    title: 'Express',
    description: 'Framework for web server',
    rating: 4,
    url: 'http://www.express.io' }
];

const sticker = {
  title: 'git',
  description: 'git logo',
  rating: 7,
  url: 'http://www.github.com'
};

module.exports = {
  stickers,
  sticker
};
