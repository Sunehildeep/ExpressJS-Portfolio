var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sunehildeep Singh' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me - Sunehildeep Singh' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects - Sunehildeep Singh' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me - Sunehildeep Singh' });
});

router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'Services - Sunehildeep Singh' });
});


module.exports = router;
