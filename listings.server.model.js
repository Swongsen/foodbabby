/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  evName: {
    type: String, 
    required: true
  }, 
  evHost: {
    type: String, 
    required: true
  }, 
  evLocation: String, 
    coordinates: {
      latitude: Number, 
      longitude: Number
  },
  evAddress: String,
  evDate: Date,
  evFood: String,
  evBldRm: String,
  evDirections: String,
  evUpdatedAt: Data
});

var accountSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Password:{
    type: String,
    required: true
  },
  Type:{
    type: boolean,
    required: true
  }
  
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);
var Accounts = mongoose.model('Accounts', accountSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
module.exports = Accounts;