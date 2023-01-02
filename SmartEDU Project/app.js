const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});