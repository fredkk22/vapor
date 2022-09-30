const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const orderSchema = require('./Order');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;