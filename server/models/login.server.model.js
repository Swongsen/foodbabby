const bcrypt = require('bcryptjs');
const config = require('../config/config');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var loginSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  username:{
    type: String,
    require: true
  },
  password:{
    type: String,
    required: true
  },
  Type:{
    type: Boolean
    }

});

// Hashing a password before saving it to the db, maybe have in login.server.controller?
loginSchema.pre('save', function (next){
    var user = this;
    bcrypt.hash(Login.password, 10, function(err, hash){
      if(err)
        return res.status(400).send(err);

      Login.password = hash;
      next();

    })
});
/* Use your schema to instantiate a Mongoose model */
var Login = mongoose.model('Login', loginSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Login;
