const bcrypt = require('bcryptjs');

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

exports.read = function(req, res){
  res.json(req.account)
}

exports.find = function(req,res) {
        Login.findOne({Name: "", Username: "", Password: ""}).exec(function(err, account){
            if(err)
                return res.status(400).send(err);
            else

                return res.json(account);
        })
    };

module.exports.addUser = function(newUser, callback){
      bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newUser.password, salt, (err,hash) =>{
          if(err) throw(err);
          newUser.password = hash;
          newUser.save(callback)''
        });
      });
    }

module.exports.comparePassword = function(candidatePassword, hash, callback){
      bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
        if(err) throw err;
        callback(null, isMatch);
      });
    }
