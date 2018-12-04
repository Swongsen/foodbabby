/* Dependencies */
var express = require('express'),
    router = express.Router();

var Login = require('../models/login.server.model');

// Get Route to read data
router.get('/', function(req, res, next){
  return res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
});

// Get Route after registering (Make /login our homepage) or else change to ('') instead?
router.get('/login', function (req, res, next){
  return res.send('get login');
})

// Post route for updating data
router.post('/', function(req, res, next){
  if(req.name &&req.body.username && req.body.password){

    var userData = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    }


    login.create(userData, function(err, user){
      if(err)
        return res.status(400).send(err);
        else{
          return res.redirect('/');
        }
      }
    });
  }
  else{
    var err = new Error('Something went wrong');
    err.status = 400;
    return next(err);
  }

});

router.post('/login', function(req, res, next){
  return res.send('POST login');
});


module.exports = router;
