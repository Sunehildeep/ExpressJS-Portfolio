const mongoose = require("mongoose");

const contactModel = new mongoose.Schema(
    {
        name: String,
        number: String,
        email: String,
    },
    {
        collection: "business_contact",
    }
);

module.exports = mongoose.model("Contact", contactModel);