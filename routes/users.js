/*
File name: users.ejs
Student name: Sunehildeep Singh
Student ID: 301210976
Date: 18th Sept, 2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
