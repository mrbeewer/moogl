var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');
var router = express.Router();

// configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// end configuration for passport

// User Account Info
router.get('/', function(req, res){
  res.render('user', { user: req.user });
});

// User Login
router.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// User Login Authentication
router.post('/login', passport.authenticate('local', { failureRedirect: '/user' }), function(req, res) {
  res.redirect('/search/showme');
});

// User Register View
router.get('/register', function(req, res){
  res.render('register', { user: req.user });
});

// User Register (posting info)
router.post('/register', function(req, res){
  User.register(new User({
    username: req.body.username //from the form
  }),
  req.body.password,
  function(err, account) {
    if (err) {
      return res.render('register', { account: account });
    }
    // passport.authenticate('local') is a function
    passport.authenticate('local')(req, res, function() {
      res.redirect('/search/showme');
    });
  });

});

// User Logout
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;
