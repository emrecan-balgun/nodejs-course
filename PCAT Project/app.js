const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const dotenv = require('dotenv');

const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const Photo = require('./models/Photo');
const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageControllers');

const app = express();
const PORT = 3000;
dotenv.config();

// use strict to false (for warning)
mongoose.set('strictQuery', false);

// connect DB
// mongoose.connect('mongodb://localhost/pcat-test-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.abdismo.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB Connected!');
}).catch(err => {
  console.log(`DB Connection Error: ${err}`);
})

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'], // override with POST having ?_method=DELETE or ?_method=PUT
  })
);

// ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
