/*
File name: index.js
Student name: Sunehildeep Singh
Student ID: 301210976
Date: 18th Sept, 2022
*/
var express = require('express');
var router = express.Router();

<!-- GET home page. -->
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sunehildeep Singh' });
});

<!-- GET about page. -->
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me - Sunehildeep Singh' });
});

<!-- GET projects page. -->
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects - Sunehildeep Singh' });
});

<!-- GET contact page. -->
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me - Sunehildeep Singh' });
});

<!-- GET experience page. -->
router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'Services - Sunehildeep Singh' });
});

module.exports = router;
