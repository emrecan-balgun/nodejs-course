const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  res.send(blog);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
