let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let Contact = require("../models/contact-list");

//Display Contact List
module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, ContactList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render("auth/contact-list", {
                title: "Business Contacts",
                displayName: req.user ? req.user.displayName : "",
                messages: req.flash("contactMessage"),
                ContactList,
            });
        }
    }).sort({ name: 1 });
};

// Display Add Page
module.exports.displayAddPage = (req, res, next) => {
    res.render("auth/add", {
        title: "Add Contacts",
        displayName: req.user ? req.user.displayName : "",
    });
};

// Function to add contact
module.exports.processAddPage = (req, res, next) => {
    Contact.create(Contact({name: req.body.name, number: req.body.phone, email: req.body.email,}), (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //Refresh Business Contacts List
            res.redirect("/contact-list");
        }
    });
};

// Display edit contact page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //Show the Edit View
            res.render("auth/edit", {
                title: "Edit Contact",
                displayName: req.user ? req.user.displayName : "",
                contact: contactToEdit,
            });
        }
    });
};

// Function to edit contact
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        _id: id,
        name: req.body.name,
        number: req.body.phone,
        email: req.body.email,
    });

    Contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //Refresh the Business Contact List
            res.redirect("/contact-list");
        }
    });
};

// Function to delete contact
module.exports.performDeletePage = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //Refresh the Business Contact List
            res.redirect("/contact-list");
        }
    });
};