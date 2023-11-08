const passport = require('passport');

exports.auth = (req, res) => {
  passport.authenticate('yandex'),
    function(req, res){
      // The request will be redirected to Yandex for authentication, so
      // this function will not be called.
    }
}
exports.callback = (req, res) => {
  passport.authenticate('yandex', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
}
