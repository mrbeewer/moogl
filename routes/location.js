var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var model = require('../models/Location');
var User = require('../models/User');


// configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// end configuration for passport

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to user error.'
  };
};


/* GET locations listing. */
router.get('/', function(req, res, next) {
  model.find(function(err, locations) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(locations);
    }
  });
});

// Route to open the Location Detail
router.get('/detail', function(req, res, next) {
  res.render('locationdetail', {user : req.user});
});

// AJAX call comes here to get the location picked on the map
router.get('/detail/data', function(req, res, next) {
  model.find({ _id: req.session.locationID },function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});

// AJAX post here with search terms
router.post('/q', function(req, res, next) {
  // JSON object sent are search terms
  console.log("==============");
  // console.log(req);
  console.log(req.body);
  var search = (req.body);
  for (var term in search) {
    if (search.hasOwnProperty(term)) {
      search[term] = true;
    };
  };
  console.log(search);
  // query database by the JSON
  model.find(search,function(err, locations) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      console.log("==============");
      console.log("==============");
      console.log(locations);
      res.json(locations);
    }
  });
});

// Route to open the map
router.get('/map', function(req, res, next) {
  res.render('map', {user : req.user});
});

// Save the locationID from the map into Session
router.post('/set-session/:id', function(req, res, next) {
  req.session.locationID = req.params.id;
  console.log("session saved via req.params.id");
  console.log(req.session.locationID);
  res.json({message: "data saved"});
});

// Save the search results into Session
router.post('/set-session', function(req, res, next) {
  req.session.search = req.body;
  console.log("session saved via req.body");
  console.log(req.session.search);
  res.render('map', {user : req.user});
});

// Get the saved Session data
router.get('/get-session', function(req, res, next) {
  // req.session. = req.params.id;
  // console.log(req.session.search);
  res.json(req.session.search);
});

// GET location by ID
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});

// No in use
router.get('/location/:id', function(req, res, next) {
 model.findById(req.params.id, function(err, location) {
   if (err) {
     res.json(buildErrorResponse(err));
   } else {
     res.json(location);
   }
 });
});

router.get('/location/burger/:id', function(req, res, next) {
 model.findById(req.params.id, function(err, burger) {
   if (err) {
     res.json(buildErrorResponse(err));
   } else {
     res.json(burger);
   }
 });
});

// POST (Create) new location
router.post('/', function(req, res, next) {
  model.create(req.body, function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});

// Find By ID and Update Locaion
router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});
router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});

// DELETE location
router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});


module.exports = router;
