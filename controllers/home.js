var path = require('path');

module.exports = {
  index: function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'templates', 'index.html'));
  },
  about: function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'templates', 'about.html'));
  },
  noRoute: function (req, res) {
    res.send('404 Not Found');
  }
}
