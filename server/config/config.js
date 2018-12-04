//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
      uri: 'mongodb://mjnolan:dcavell1999@ds017736.mlab.com:17736/max-nolan-uf2018', 
      //place the URI of your mongo database here.
    }, 
    port: 8080
  };