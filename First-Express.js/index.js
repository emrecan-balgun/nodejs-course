const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('<h1>Index Page</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
    res.status(200).send('<h1>Contact Page</h1>');
});

// * is used outside of other routes
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});