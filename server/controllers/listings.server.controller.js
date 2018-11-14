
/* Dependencies */
var mongoose = require('mongoose'), 
    Listing = require('../models/listings.server.model.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);


  /* Then save the listing */
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
    }
  });
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.listing);
};

/* Update a listing */
exports.update = function(req, res) {
  var listing = req.listing;

  //First lets update the timestamp
  listing.evUpdatedAt = new Date();
  //Now for the rest using req.body
  listing.evName = req.body.name;
  listing.evHost = req.body.host;
  listing.evAddress = req.body.address;
  listing.evDate = req.body.Date;
  listing.evFood = req.body.food;
  listing.evBldRm = req.body.bldRm;
  listing.evDirections = req.body.directions;

  //FIXED - "updating coordinates" piazza post helped me here!
  if(req.results)
  {
    listing.evLocation.latitude = req.results.lat;
    listing.evLocation.longitude = req.results.lng;
  }

  //Use save to update our listing with the new data
  Listing.save(function(err)
  {
    if(!err)
    {
      res.json(listing);
    }
    else{
      res.status(400).send();
      console.log(err);
    }
  });
};

/* Delete a listing */
exports.delete = function(req, res) {
  var listing = req.listing;

  //We only need to use remove here
  Listing.findOneAndRemove({name: listing.name}, {code: listing.code}, function(err){
    if(err)
    {
      res.status(400).send(err);
      console.log('Error in listing.server.controller.js.');
    }
    else
    {
      res.status(200).send();  
      console.log('Entry removed.');
    }
    });

};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {

  //Mongoose' find has a sort function and it is AWFUL to use
  //https://stackoverflow.com/questions/5825520/in-mongoose-how-do-i-sort-by-date-node-js
  //How is this better than using SQL I just don't get it. Mongoose's documents don't even explain sorting
  Listing.find({}).sort({code: 1}).exec(function(err, listings){
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    else{
      res.json(listings);
    }
  })
};

exports.mapInfo = function(req, res) {
  // same as exports.list above
  Listing.find({}).exec(function(err, listings){
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    else{
      var features = listings.map( function(listing) {
        return {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Host:</strong> " + listing.evHost 
                          + "<br><strong>Name:</strong> " + listing.evName
                          + "</br><strong>Description:</strong> " + listing.evDescription 
                          + "<br><strong>Address:</strong> " + listing.evAddress 
                          + "</br><strong>Food:</strong> " + listing.evFood,
                        "icon": "star",
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [listing.coordinates.longitude, listing.coordinates.latitude],
                    }
        }
      });
      res.json(features);
    }
  });
};

exports.getCoordinates = function(req, res) {
  Listing.find({})/*.sort({code: 1})*/.exec(function(err, listings){
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    else{
      var coords = listings.map( function(listing) {
        return {
                    "geometry": {
                        "type": "Point",
                        "coordinates": [listing.coordinates.longitude, listing.coordinates.latitude],
                    }
        }
      });
      res.json(coords);
    }
  });
};

exports.mapByFoodType = function(req, res) {
  Listing.find({}).exec(function(err, listings){
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    else{
      var features = listings.filter( 
        listing => listing.evFood === req ).map( function(listing) {
        return {
                    "type": "Feature",
                    "properties": {
                        "description": listing.evName,
                        "icon": "star",
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [listing.coordinates.longitude, listing.coordinates.latitude],
                    }
        }
      });
      res.json(features);
    }
  });
};

// TODO mapInfo the same as list but with map stuff

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};
