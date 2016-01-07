var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// declare passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// but before the db is loaded
// var cookieSession = require('cookie-session');
// var cookieParser = require('cookie-parser');
var app = express();
// app.use(express.cookieParser('B33l3r'));
// app.use(express.cookieSession());
// app.use(app.router);

require("./db/database");

var index = require('./routes/index');
var user = require('./routes/user');
var location = require('./routes/location');
var search = require('./routes/search');



// instantly enable sessions
app.use(require('express-session')({
  secret: 'BeelerBlocker', //kind of like your own salt
  resave: false,
  saveUninitialized: false
}));
// enable cookieSession
// app.use(express.cookieSession({
//   key: 'app.sess',
//   secret: 'BeelerBlocker'
// }));
//
app.use(passport.initialize());
app.use(passport.session());
// done enabling sessions

// configure passport
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// end configuration for passport

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);
app.use('/location', location);
app.use('/search', search);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
