const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  genres: ['Genre']
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
