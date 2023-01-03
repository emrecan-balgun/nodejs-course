const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.signup); // localhost:3000/users/signup
router.route('/signin').post(authController.signin); // localhost:3000/users/signin

module.exports = router;