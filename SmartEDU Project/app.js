const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');

const app = express();
dotenv.config();

// Mongoose Config
mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.abdismo.mongodb.net/smartedu`)
  .then(() => console.log('Connected DB!'));

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

// Routes
app.use('/', pageRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
