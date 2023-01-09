const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  // const posts = await Post.find({}).sort('-createdDate'); // -createdDate: descending order (the last uploaded item appears first)
  // res.render('index', {
  //   posts,
  // });

  const page = req.query.page || 1;
  const postsPerPage = 3;

  const totalPosts = await Post.find().countDocuments();

  const posts = await Post.find({})
    .sort('-createdDate')
    .skip((page - 1) * postsPerPage)
    .limit(postsPerPage);

  res.render('index', {
    posts,
    current: page,
    pages: Math.ceil(totalPosts / postsPerPage),
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
