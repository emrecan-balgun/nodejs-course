const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    const categories = await Category.find();
    res.status(200).render('courses', {
      page_name: 'courses',
      courses,
      categories,
    });
    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     courses,
    //   },
    // });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
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
