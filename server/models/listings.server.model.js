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
      longitude: Number,
  },
  evAddress: String,
  evDate: Date,
  evFood: String,
  evBldRm: String,
  evDirections: String,
  evDescription: String,
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

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
