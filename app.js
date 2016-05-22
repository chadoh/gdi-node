var express = require('express');
var homeController = require('./controllers/home');

var app = express();

app.use(express.static('public'));

app.get('/', homeController.index);
app.get('/about', homeController.about);
app.get('/*', homeController.noRoute);

app.listen(3000, function () {
  console.log('Your app is listening on port 3000!');
});
