
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

exports.find = function(req,res) {
    Login.findOne({Name: "", Password: ""}).exec(function(err, account){
        if(err)
            return res.status(400).send(err);
        else
            return res.json(account);
    })
};

/* Retreive all the accounts*/
exports.list = function(req, res) {

    Login.find({}).exec(function(err, login){
      if(err){
        console.log(err);
        res.status(400).send(err);
      }
      else{
        res.json(login);
      }
    })
  };
    