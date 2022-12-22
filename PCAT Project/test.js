const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set strictQuery to false (for warning)
mongoose.set('strictQuery', false);

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create a schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

// create a model
const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
// Photo.create({
//   title: 'Photo Title 3',
//   description: 'Photo Description 3 lorem ipsum dot color',
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// update a photo
// const id = '63a44d1d140ea7460e907c77';
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 3 Updated 2',
//     description: 'Photo Description 3 Updated 2',
//   },
//   // return updated data
//   { new: true },
//   (err, data) => {
//     console.log(data);
//   }
// );

// delete a photo
// const id = '63a44d1d140ea7460e907c77';
// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log('Photo is removed');
// });
