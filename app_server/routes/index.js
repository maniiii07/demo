var express = require('express');
var router = express.Router();
var ctrlSign = require('../Controllers/sign');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi Express' });
});
router.get('/location', function(req, res, next) {
  res.render('index', { title: 'Location info' });
});
router.get('/location/review', function(req, res, next) {
  res.render('index', { title: 'Review' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about' });
});
router.get('/signin', ctrlSign.signin)

module.exports = router;
