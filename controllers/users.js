const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const userModel = require("../models/users");
const User = userModel.User;

// Display home page
module.exports.displayHomePage = (req, res, next) => {
    return res.render('index', { title: 'Sunehildeep Singh' });
};

// Display about page
module.exports.displayAboutPage = (req, res, next) => {
    return res.render('about', { title: 'About Me - Sunehildeep Singh' });
};

// Display contact page
module.exports.displayContactPage = (req, res, next) => {
    return res.render('contact', { title: 'Contact Me - Sunehildeep Singh' });
};

// Display Experience page
module.exports.displayExperiencePage = (req, res, next) => {
    return res.render('experience', { title: 'Services - Sunehildeep Singh' });
};


// Display projects page
module.exports.displayProjectsPage = (req, res, next) => {
    return res.render('projects', { title: 'Projects - Sunehildeep Singh' });
};


// Display login page
module.exports.displayLoginPage = (req, res, next) => {
    //Check if the user is already logged in
    if (!req.user) {
        res.render("auth/login", {
            title: "Login",
            messages: req.flash("loginMessage"),
            displayName: req.user ? req.user.displayName : "",
        });
    } else {
        return res.redirect("/contact-list");
    }
};


// Function to add new account
module.exports.checkAccount = (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash("loginMessage", info.message);
            return res.redirect("/login");
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.redirect("/contact-list");
        });
    })(req, res, next);
};


// Function to logout user
module.exports.logoutUser = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
};


// Display register page
module.exports.displayRegisterPage = (req, res, next) => {
    if (!req.user) {
        res.render("auth/register", {
            title: "Register",
            messages: req.flash("registerMessage"),
            displayName: req.user ? req.user.displayName : "",
        });
    } else {
        return res.redirect("/contact-list");
    }
};


// Function to register account
module.exports.registerAccount = (req, res, next) => {

    let insertUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        displayName: req.body.displayName,
    });

    User.register(insertUser, req.body.password, (err) => {
        if (err) {
            if (err.name == "UserExistsError") {
                req.flash(
                    "registerMessage",
                    "User already exists, please choose another username."
                );
            }
            console.log(err.name);
            return res.render("auth/register", {
                title: "Register",
                messages: req.flash("registerMessage"),
                displayName: req.user ? req.user.displayName : "",
            });
        } else {
            return passport.authenticate("local")(req, res, () => {
                res.redirect("/contact-list");
            });
        }
    });
};