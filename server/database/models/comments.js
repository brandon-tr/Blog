const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  body: { type: String, required: true },
  BlogPost: [{ type: mongoose.Schema.ObjectId, ref: 'BlogPostSchema' }],
  user: [{ type: mongoose.Schema.ObjectId, ref: 'UserSchema' }],
  date: Date,
});
// eslint-disable-next-line no-multi-assign,no-unused-vars
const exportComment = (module.exports = mongoose.model(
  'CommentSchema',
  CommentSchema,
));
