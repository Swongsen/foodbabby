//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://<alexmochrie>:<admin1234>@ds161312.mlab.com:61312/alex_test', 
    //place the URI of your mongo database here.
  }, 
  port: 8080
};