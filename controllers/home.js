module.exports = {
  index: function (req, res) {
    res.send('Welcome to the GDI Node Workshop!');
  },
  noRoute: function (req, res) {
    res.send('404 Not Found');
  }
}
