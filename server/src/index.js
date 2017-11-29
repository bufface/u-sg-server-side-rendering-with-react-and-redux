const express = require('express');
const app = express();

app.get('/', (req, res) => {});

app.listen(300, () => {
  console.log('Listening on port 3000');
});