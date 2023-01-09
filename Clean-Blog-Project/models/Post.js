const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const PostSchema = new Schema({
    title: String,
    detail: String,
    createdDate: {
        type: Date,
        default: Date.now,
    }
})

// create a model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;