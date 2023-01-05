const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true, // remove whitespace from both ends of a string (e.g. "  Hello World  " -> "Hello World")
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    // slug is a URL-friendly version of a title (e.g. "How to make a cake" -> "how-to-make-a-cake")
    type: String,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

CourseSchema.pre('validate', function (next) {
  // pre-save hook (https://mongoosejs.com/docs/middleware.html#pre)
  // i use function (not arrow function) because i need to use this keyword (https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback)
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next(); // next() is required to continue the process
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
