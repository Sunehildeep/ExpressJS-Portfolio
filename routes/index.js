/*
File name: index.js
Student name: Sunehildeep Singh
Student ID: 301210976
Date: 18th Sept, 2022
*/
var express = require('express');
var router = express.Router();
var userController = require("../controllers/users");
var contactController = require("../controllers/contact-list");
var passport = require("passport");

<!-- GET home page. -->
router.get('/',userController.displayHomePage);

<!-- GET about page. -->
router.get('/about', userController.displayAboutPage);

<!-- GET projects page. -->
router.get('/projects', userController.displayProjectsPage);

<!-- GET contact page. -->
router.get('/contact', userController.displayContactPage);

<!-- GET experience page. -->
router.get('/experience', userController.displayExperiencePage);

/* POST Route for processing the Login page */
router.post("/login", userController.checkAccount);

/* GET to perform UserLogout */
router.get("/logout", userController.logoutUser);

/* GET Route for displaying the Login page */
router.get("/login", userController.displayLoginPage);

/* GET Route for displaying the register page */
router.get("/register", userController.displayRegisterPage);

/* POST Route for processing the register page */
router.post("/register", userController.registerAccount);

function requireAuth(req, res, next) {
  //check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Business Contact page */
router.get("/contact-list", requireAuth, contactController.displayContactList);

/* GET Route for displaying the Add page */
router.get("/contact-list/add", requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page */
router.post("/contact-list/add", requireAuth, contactController.processAddPage);

/* GET Route for displaying the Edit page */
router.get("/contact-list/edit/:id", requireAuth, contactController.displayEditPage);

/* POST Route for processing the Edit page */
router.post("/contact-list/edit/:id", requireAuth, contactController.processEditPage);

/* GET to perform contact deletion */
router.get("/contact-list/delete/:id", requireAuth, contactController.performDeletePage);

module.exports = router;
