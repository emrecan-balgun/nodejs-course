const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    // slug is a URL-friendly version of a title (e.g. "How to make a cake" -> "how-to-make-a-cake")
    type: String,
    unique: true,
  },
});

CategorySchema.pre('validate', function (next) {
  // pre-save hook (https://mongoosejs.com/docs/middleware.html#pre)
  // i use function because i need to use this keyword (https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback)
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next(); // next() is required to continue the process
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
