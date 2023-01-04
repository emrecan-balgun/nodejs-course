const express = require('express');

const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route('/').post(roleMiddleware(['instructor', 'admin']), courseController.createCourse); // localhost:3000/courses
// only instructor and admin can create a course
router.route('/').get(courseController.getAllCourse); // localhost:3000/courses
router.route('/:slug').get(courseController.getCourse); // localhost:3000/courses/:slug

module.exports = router;
