const fs = require('fs');

const Photo = require('../models/Photo');

exports.getAllPhotos = async (req, res) => {
  // console.log(req.query);
  // const photos = await Photo.find({}).sort('-createdDate'); // -createdDate: descending order (the last uploaded item appears first)
  // res.render('index', {
  //   photos,
  // });

  const page = req.query.page || 1;
  const photosPerPage = 3;

  const totalPhotos = await Photo.find().countDocuments();

  const photos = await Photo.find({})
  .sort('-createdDate')
  .skip((page - 1) * photosPerPage)
  .limit(photosPerPage);

  res.render('index', {
    photos,
    current: page,
    pages: Math.ceil(totalPhotos / photosPerPage)
  });
};

exports.getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
};

exports.createPhoto = async (req, res) => {
  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/');
  });
};

exports.updatePhoto = async (req, res) => {
  await Photo.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/photos/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  let deletedImage = __dirname + '/../public' + photo.image;

  if (fs.existsSync(deletedImage)) {
    // check if the image exists
    fs.unlinkSync(deletedImage); // delete the image
  }

  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
