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

router.get('/detail', function(req, res, next) {
  res.render('locationdetail');
});

var locationID = "568d5f825d5455088a340ff1";

router.get('/detail/data', function(req, res, next) {
  model.find({ _id: locationID },function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});

router.get('/query', function(req, res, next) {
  model.find({ foodtruck:true, latenight:true, byob:true, price:4 },function(err, locations) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(locations);
    }
  });
});

router.get('/q/:id', function(req, res, next) {
  var search = {};
  var termSplit = req.params.id.split("&");
  for ( var phrase in termSplit ) {
    var pairSplit = termSplit[phrase].split(':');
    search[pairSplit[0]] = pairSplit[1];
  }
  console.log(search);
  model.find(search,function(err, locations) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(locations);
      // console.log(locations);
      // console.log("stringify now");
      // console.log(JSON.stringify(locations));
      // res.render('map', { mapData: JSON.stringify(locations) });
    }
  });
});

router.get('/map', function(req, res, next) {
  res.render('map');
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


router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});

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

router.post('/', function(req, res, next) {
  model.create(req.body, function(err, location) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(location);
    }
  });
});

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
