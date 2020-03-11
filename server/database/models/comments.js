const CommentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    body: { type: String, required: true },
    BlogPost: [ {type : mongoose.Schema.ObjectId, ref : 'BlogPostSchema'} ],
    user: [ {type : mongoose.Schema.ObjectId, ref : 'UserSchema'} ],
    date: Date
});
var exports = module.exports = mongoose.model('CommentSchema', CommentSchema);