const mongoose = require('mongoose');
const secret = 'SuperSecret';
const User = mongoose.model('UserSchema');
const Post = mongoose.model('BlogPostSchema');
const Comment = mongoose.model('CommentSchema');
const jwt = require('jsonwebtoken');

// TODO add authentication later
module.exports = function getStatsDashboard(req, res) {
  const count = {};
  User.countDocuments({}, function (errU, user) {
    count.user = user;
    Post.countDocuments({}, function (errP, post) {
      count.post = post;
      Comment.countDocuments({}, function (errC, comment) {
        count.comment = comment;
        return res.status(200).json(count);
      });
    });
  });
};
