const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');

const router = express.Router();

router.route('/signup').post(
  [
    body('name').not().isEmpty().withMessage('Please enter your name'),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject('Email already in use!');
          }
        });
      }),
    body('password').not().isEmpty().withMessage('Please enter a password'),
  ],
  authController.signup
); // localhost:3000/users/signup
router.route('/signin').post(authController.signin); // localhost:3000/users/signin
router.route('/signout').get(authController.signout); // localhost:3000/users/signout
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage); // localhost:3000/users/dashboard
// firstly authMiddleware will be executed, then authController
// if user is not logged in, authMiddleware will redirect to login page
// if user is logged in, authController will render dashboard page

module.exports = router;
