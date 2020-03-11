const BlogPostSchema = new Schema({
    author: ObjectId,
    id: ObjectId,
    meta: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    readTime: {type: String, required: true},
    comments: [ {type : mongoose.Schema.ObjectId, ref : 'CommentSchema'} ],
    user: [ {type : mongoose.Schema.ObjectId, ref : 'UserSchema'} ],
    date: Date
  });
  var exports = module.exports = mongoose.model('BlogPostSchema', BlogPostSchema);
  