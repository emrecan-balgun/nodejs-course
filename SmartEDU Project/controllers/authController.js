const bcrypt = require('bcrypt');
const session = require('express-session');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const Category = require('../models/Category');
const Course = require('../models/Course');

exports.signup = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).redirect('/login');
  } catch (error) {
    const errors = validationResult(req);
    for (let i = 0; i < errors.array().length; i++) {
      req.flash('error', `${errors.array()[i].msg}`);
    }
    res.status(400).redirect('/register');
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        // user session
        req.session.userID = user._id;
        res.status(200).redirect('/users/dashboard');
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.signout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.getDashboardPage = async (req, res) => {
  const user = await User.findById(req.session.userID).populate('courses'); // populate() is used to get the data from the referenced document (https://mongoosejs.com/docs/populate.html) // for ex: user.courses
  const courses = await Course.find({ user: req.session.userID }); // for instructor
  const categories = await Category.find();
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user,
    categories,
    courses,
  });
};
