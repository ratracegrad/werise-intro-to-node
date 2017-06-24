const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('home page');
  // res.sendFile('index.html', { root: __dirname });
});
app.get('/about', function(req, res) {
  res.send('about page');
  // res.sendFile('about.html', { root: __dirname });
});
app.get('/contact', function(req, res) {
  res.send('contact page');
  // res.sendFile('contact.html', { root: __dirname });
});
app.get('/products', function(req, res) {
  res.send('products page');
  // res.sendFile('products.html', { root: __dirname });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});