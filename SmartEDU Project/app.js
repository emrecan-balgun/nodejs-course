const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

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

// Global Variable
global.userIN = null;

// Middlewares
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.abdismo.mongodb.net/smartedu`,
      touchAfter: 24 * 3600, // time period in seconds (24 hours)
    }),
  })
);

// Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
