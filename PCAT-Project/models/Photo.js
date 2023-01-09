const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// create a model
const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;