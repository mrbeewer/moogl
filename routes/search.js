var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');
var model = require('../models/Search');
var router = express.Router();

// configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// end configuration for passport

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to a user error'
  };
};

router.get("/showme", function(req, res, next) {
  res.render("search", {user : req.user});
});

// GET all searches.
router.get('/', function(req, res, next) {
  model.find(function(err, searches) {
    if (err) {
      res.json(buildErrorResponse(err));
    }
    else {
      res.json(searches);
    }
  });
});

// GET search by id
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, search) {
    if (err) {
      res.json(buildErrorResponse(err));
    }
      else {
      res.json(search);
    }
  });
});

// CREATE search
router.post('/', function(req, res, next) {
  model.create(req.body, function(err, search) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(search);
    }
  });
});

// UPDATE search by id
router.put('/:id', function(req, res) {
  model.findbyIdAndUpdate(req.params.id, req.body, function(err, search) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(search);
    }
  });
});
router.patch('/:id', function(req, res) {
  model.findbyIdAndUpdate(req.params.id, req.body, function(err, search) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(search);
    }
  });
});

// DESTROY search by id
router.delete('/:id', function(req, res) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, search) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(search);
    }
  });
});

router.get('/set-session/:id', function(req, res, next) {
  req.session.search = req.params.id;
  console.log("session saved");
  console.log(req.session.search);
  res.json({message: "data saved"});
});

router.post('/set-session', function(req, res, next) {
  req.session.search = req.body;
  console.log("session saved");
  console.log(req.session.search);
  res.json({message: "data saved"});
});

router.get('/get-session', function(req, res, next) {
  // req.session. = req.params.id;
  // console.log(req.session.search);
  res.json(req.session.search);
});

module.exports = router;
