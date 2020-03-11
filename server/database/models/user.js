const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    comments: [ {type : mongoose.Schema.ObjectId, ref : 'CommentSchema'} ],
    BlogPost: [ {type : mongoose.Schema.ObjectId, ref : 'BlogPostSchema'} ],
})
var exports = module.exports = mongoose.model('UserSchema', UserSchema);