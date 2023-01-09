const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.status(201).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      status: 'success',
      data: {
        categories,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
