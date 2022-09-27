const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
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
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;