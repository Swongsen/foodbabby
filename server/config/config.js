//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
      uri: 'mongodb://admin:admin1234@ds157493.mlab.com:57493/food_baby_sp3', 
      //place the URI of your mongo database here.
    }, 
    port: process.env.PORT || 8080,
  };