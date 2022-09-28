const db = require('./connection');
const { User, Game, Genre } = require('../models');

db.once('open', async () => {
  await Genre.deleteMany();

  const genres = await Genre.insertMany([
    { name: 'RPG' },
    { name: 'Shooter' },
    { name: 'Action-Adventure' },
    { name: 'Platform' },
    { name: 'Fighting' },
    { name: 'Sports' }
  ]);

  console.log('categories seeded');

  await Game.deleteMany();

  const games = await Game.insertMany([
    {
      name: 'The Legend of Zelda: A link to the past',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      genre: genres[0]._id,
      price: 20.99,
    },
    {
      name: 'Super Mario Bros 3',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      genre: genres[3]._id,
      price: 18.99,
    },
    {
      name: 'Dark Souls 3',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      genre: genres[0]._id,
      price: 25.99,
    },
   
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        games: [games[0]._id, games[0]._id, games[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
