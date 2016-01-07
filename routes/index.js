var express = require('express');
var router = express.Router();

siteData = {
  title: 'Beeler\'s Blockers'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = siteData;
  data.user = req.user;
  // res.render('index', siteData);
  res.render('search');
});

module.exports = router;
