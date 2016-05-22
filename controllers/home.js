module.exports = {
  index: function (req, res) {
    res.render('index');
  },
  about: function (req, res) {
    res.render('about');
  },
  noRoute: function (req, res) {
    res.render('notFound');
  }
}
