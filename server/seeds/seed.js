const db = require('../config/connection');
const { Game, Genre, User } = require('../models');

const gameData = require('./gameData.json');
const genreData = require('./genreData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await Game.deleteMany({});
  await Genre.deleteMany({});
  await User.deleteMany({});

  const games = await Game.insertMany(gameData);
  const genres = await Genre.insertMany(genreData);
  const users = await User.insertMany(userData);

  console.log('Everything seeded!');
  process.exit(0);
});