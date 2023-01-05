const bcrypt = require('bcrypt');
const session = require('express-session');

const User = require('../models/User');
const Category = require('../models/Category');
const Course = require('../models/Course');

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect('/login');
    // res.status(201).json({
    //   status: 'success',
    //   data: {
    //     user,
    //   },
    // });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          // user session
          req.session.userID = user._id;
          // res.status(200).send('Logged in');
          res.status(200).redirect('/users/dashboard');
        } else {
          res.status(401).send('Incorrect password or email');
        }
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
  const user = await User.findById(req.session.userID);
  const courses = await Course.find({ user: req.session.userID });
  const categories = await Category.find();
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user,
    categories,
    courses,
  });
};
