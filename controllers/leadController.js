const Leads = require("../models/Leads");
const mongoose = require("mongoose");


module.exports = {
    findAll: function(req, res) {
        console.log("findAll function ran");
        Leads.find(req.query)
            .sort({ date: -1})
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    findByProduct: function(req, res) {
        console.log("findbyProduct in leadController");
        console.log(req.params);
        Leads.findById(req.params)
    },
    create: function(req, res) {
        console.log("creating a lead in db");
        Leads.create(req.body)
            .then(dbModel => {
                console.log(dbModel);
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    deleteOne: function(req, res) {
        console.log("deleting a lead in db");
        const { params } = req;
        const { custEmail } = params;
        Leads.deleteOne({ "email": custEmail }, function(err) {
            if (err) {
                console.log(err);
            } else console.log(custEmail, "is deleted");
        });
    }


}