// require modules for the User Model
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const User = new mongoose.Schema(
    {
        username: {
            type: String,
            default: "",
            trim: true,
            required: "Username is required",
        },

        password:{
            type: String,
            default: "",
            trim:true,
            required: "Password is required"
        },

        email: {
            type: String,
            default: "",
            trim: true,
            required: "email address is required",
        },

        displayName: {
            type: String,
            default: "",
            trim: true,
            required: "Display name is required",
        },

    },
    {
        collection: "users",
    }
);

// configure model
const options = { passwordError: "The password entered is wrong or missing." };

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User);