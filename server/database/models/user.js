const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 5 },
  dateCreated: { type: Date, default: Date.now() },
  reputation: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  banned: {
    type: Number,
    default: 0,
  },
  admin: {
    type: Number,
    default: 1,
  },
  comments: [{ type: mongoose.Schema.ObjectId, ref: 'CommentSchema' }],
  BlogPost: [{ type: mongoose.Schema.ObjectId, ref: 'BlogPostSchema' }],
});
// eslint-disable-next-line no-multi-assign,no-unused-vars

UserSchema.pre('save', function (next) {
  if (this.password.length < 32) {
    bcrypt
      .hash(this.password, 10)
      // eslint-disable-next-line camelcase
      .then((hashed_password) => {
        // eslint-disable-next-line camelcase
        this.password = hashed_password;
        next();
      })
      .catch((err) => console.log(err));
  }
});
// eslint-disable-next-line no-unused-vars,no-multi-assign
const exportUser = (module.exports = mongoose.model('UserSchema', UserSchema));
