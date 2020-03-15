const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leadSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Must provide your first name"],
        maxlength: 32
    },
    lastName: {
        type: String,
        required: [true, "Must provide your last name"],
        maxlength: 32
    },
    companyName: {
        type: String,
        required: [false],
        maxlength: 100
    },
    email: {
        type: String,
        required: [true, "Must provide an email"],
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    phoneNumber: {
        type: Number
    },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    industry: {
        type: String
    },
    demo: { type: Boolean, default: false },
    date: { type: Date, default: Date.now},
    
    
});

const Leads = mongoose.model("Leads", leadSchema);

module.exports = Leads;