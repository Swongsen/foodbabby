'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./server/models/listings.server.model.js'), 
    config = require('./server/config/config.js');

/* Connect to your database */
mongoose.connect(config.db.uri); 
var db = mongoose.connection;
var listingData;

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

//Read file copied from my assignment1!
fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err){
    console.log(err);
  }
  else
  {
    listingData = JSON.parse(data);
    //Debug line
    //console.log(listingData);
  
    //Loop to fill the DB with our entries, save function found in manual pages
    for (var i = 0; i < (listingData.entries).length; i++)
    {
      var dir = new Listing(listingData.entries[i]);
      console.log(dir);
      dir.save(function(err, dir){
        if(err)
          throw err;
      });
    }
  }
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */