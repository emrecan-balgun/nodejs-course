const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort('-createdDate'); // -createdDate: descending order (the last uploaded item appears first)
  res.render('index', {
    posts,
  });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
