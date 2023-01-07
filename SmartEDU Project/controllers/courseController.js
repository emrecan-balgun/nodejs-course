const Course = require('../models/Course');
const Category = require('../models/Category');
const User = require('../models/User');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      user: req.session.userID,
    });
    req.flash('success', `${course.name} has been created successfully`);
    res.status(201).redirect('/courses');
  } catch (error) {
    req.flash('error', 'Something went wrong!');
    res.status(400).redirect('/courses');
  }
};

exports.getAllCourse = async (req, res) => {
  try {
    const categorySlug = req.query.category;
    const searchQuery = req.query.search;
    let filter = {};

    if (categorySlug) {
      const category = await Category.findOne({ slug: categorySlug });
      filter = { category: category._id };
    }

    if (searchQuery) {
      filter = { name: searchQuery };
    }

    if (!searchQuery && !categorySlug) {
      filter.name = '';
      filter.category = null;
    }

    const courses = await Course.find({
      $or: [
        { name: { $regex: '.*' + filter.name + '.*', $options: 'i' } },
        { category: filter.category },
      ],
    })
      .populate('user') // for teacher name
      .sort({ createdAt: -1 }); // -1 for descending order of createdAt
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
    const user = await User.findById(req.session.userID);
    const course = await Course.findOne({ slug: req.params.slug }).populate(
      'user'
    ); // populate() is used to get the data from the referenced document (https://mongoosejs.com/docs/populate.html)
    const categories = await Category.find();
    res.status(200).render('course', {
      page_name: 'courses',
      course,
      user,
      categories,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.enrollCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    await user.courses.push(req.body.course_id);
    await user.save();
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.releaseCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    await user.courses.pull(req.body.course_id);
    await user.save();
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
