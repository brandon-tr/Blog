const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  meta: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  readTime: { type: String, required: true },
  comments: [{ type: mongoose.Schema.ObjectId, ref: 'CommentSchema' }],
  user: [{ type: mongoose.Schema.ObjectId, ref: 'UserSchema' }],
  date: Date,
});
// eslint-disable-next-line no-unused-vars,no-multi-assign
const exportPost = (module.exports = mongoose.model(
  'BlogPostSchema',
  BlogPostSchema,
));
