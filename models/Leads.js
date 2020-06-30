const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeadSchema = new Schema({
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
    demo: { type: Boolean, default: false },
    phoneNumber: {
        type: Number
    },
    state: { type: String },
    zipCode: { type: String },
    industry: { type: String },
    misc2: { type: String },
    misc3: { type: String },
    product: { type: String },
    date: { type: Date, default: Date.now},
    
    
});

const Leads = mongoose.model("Leads", LeadSchema);

module.exports = Leads;