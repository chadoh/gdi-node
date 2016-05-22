var express = require('express');
var homeController = require('./controllers/home');

var app = express();

app.get('/', homeController.index);

app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
