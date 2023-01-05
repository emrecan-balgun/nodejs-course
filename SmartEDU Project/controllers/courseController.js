const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      user: req.session.userID,
    });
    res.status(201).redirect('/courses');
    // res.status(201).json({
    //   status: 'success',
    //   data: {
    //     course,
    //   },
    // });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAllCourse = async (req, res) => {
  try {
    const categorySlug = req.query.category;

    let filter = {};
    if (categorySlug) {
      const category = await Category.findOne({ slug: categorySlug });
      filter = { category: category._id };
    }

    const courses = await Course.find(filter).sort({ createdAt: -1 }); // -1 for descending order of createdAt
    const categories = await Category.find();
    res.status(200).render('courses', {
      page_name: 'courses',
      courses,
      categories,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug }).populate('user'); // populate() is used to get the data from the referenced document (https://mongoosejs.com/docs/populate.html)
    res.status(200).render('course', {
      page_name: 'courses',
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
