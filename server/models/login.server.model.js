var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var loginSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Password:{
    type: String,
    required: true
  },
  Type:{
    type: Boolean
    }
  
});

/* Use your schema to instantiate a Mongoose model */
var Login = mongoose.model('Login', loginSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Login;