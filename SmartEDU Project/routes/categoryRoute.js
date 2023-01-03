const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createCategory); // localhost:3000/categories
router.route('/').get(categoryController.getAllCategory); // localhost:3000/categories

module.exports = router;
