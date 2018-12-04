
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
            res.json(account);
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

  /* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.loginByID = function(req, res, next, id) {
    Login.findById(id).exec(function(err, login) {
      if(err) {
        res.status(400).send(err);
      } else {
        req.login = login;
        next();
      }
    });
  };
    