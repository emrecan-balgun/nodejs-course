module.exports = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect('/');
  }
  next(); // it's important to call next() to continue the process
};
