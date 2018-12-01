var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  mongoose.Promise = global.Promise;
  app.listen(config.port, function() {
    console.log('App listening on port', config.port);
  });
};