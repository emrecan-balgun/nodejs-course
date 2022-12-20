const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = 3001;

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add_post');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
