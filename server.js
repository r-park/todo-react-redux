var express = require('express'),
  app = express(),
  port = 8150;

app.get('/', (req, res) => {
  res.sendFile('./example/index.html', {root: __dirname});
});

app.get('/application.min.js', (req, res) => {
  res.sendFile('./dist/application.js', {root: __dirname});
});

app.listen(port, () => console.log(`Started on port ${port}`));
