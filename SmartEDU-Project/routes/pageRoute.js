const express = require('express');

const pageController = require('../controllers/pageController');
const redirectMiddleware = require('../middlewares/redirectMiddleware');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/register').get(redirectMiddleware, pageController.getRegisterPage);
router.route('/login').get(redirectMiddleware, pageController.getLoginPage);
// firstly redirectMiddleware will be executed, then pageController
// if user is logged in, redirectMiddleware will redirect to home page
// if user is not logged in, pageController will render register or login page
router.route('/contact').get(pageController.getContactPage);
router.route('/contact').post(pageController.sendEmail);

module.exports = router;