const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();
dotenv.config();

// Mongoose Config
mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.abdismo.mongodb.net/smartedu`
  )
  .then(() => console.log('Connected DB!'));

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
