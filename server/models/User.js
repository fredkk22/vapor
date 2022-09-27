const { Schema, Types } = require('mongoose');
const orderSchema = require('./Order');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    firstName: {
      type: String,
      required: true,
      max_length: 50,
    },
    lastName: {
      type: String,
      required: true,
      max_length: 50,
    },
    userName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 8,
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    orders: [orderSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;