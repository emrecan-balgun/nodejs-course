const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'Photo 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum!',
  };
  res.send(photo);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
