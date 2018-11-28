
/* Dependencies */
var mongoose = require('mongoose'), 
    Login = require('../models/login.server.model.js');

exports.create = function(req, res) {

    /* Instantiate a Listing */
    var account = new Login(req.body);
    
    
    /* Then save the listing */
    account.save(function(err) {
        if(err) 
        {
            console.log(err);
            res.status(400).send(err);
        } 
        else {
            res.json(listing);
        }
    });
};

// exports.find = function(req,res) {
//     Login.findOne({})
// }
    