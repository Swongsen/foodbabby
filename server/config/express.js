var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, {
    useMongoClient: true,
    /* other options */
  });

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  //Serve static files 
  //Taken from the tutorial link
  app.use(express.static('client'));

  //Use the listings router for requests to the api 
  //Tutorial also explains virtual path prefixes
  app.use('/api/listings', listingsRouter);

  // allow CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /// Go to homepage for all routes not specified
  //Since we specified routes with app.use and Express is sequential in resolution
  //We now need a case for all other situations
  
  //https://stackoverflow.com/questions/19313016/catch-all-route-except-for-login
  //From above link and various other threads I see '*' is used for all others
  app.get('*', function(req, res){
    res.redirect('/');    // '/' is used for home directory
  });

  return app;
};  