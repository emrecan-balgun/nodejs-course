const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejs = require('ejs');

const postControllers = require('./controllers/postControllers');
const pageControllers = require('./controllers/pageControllers');

const app = express();
const PORT = 3001;

// use strict to false (for warning)
mongoose.set('strictQuery', false);

// connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'], // override with POST having ?_method=DELETE or ?_method=PUT
  })
);

// ROUTES
app.get('/', postControllers.getAllPosts);
app.get('/posts/:id', postControllers.getPost);
app.post('/posts', postControllers.createPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/posts/:id', postControllers.deletePost);

app.get('/about', pageControllers.getAboutPage);
app.get('/add', pageControllers.getAddPage);
app.get('/posts/edit/:id', pageControllers.getEditPage);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
