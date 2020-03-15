const Leads = require("../models/Leads");

module.exports = {
    findAll: function(req, res) {
        console.log("findAll function ran");
        Leads.find(req.query)
            .sort({})
    }
}