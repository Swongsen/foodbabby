/* Dependencies */
var express = require('express'),
    router = express.Router();

var Login = require('../models/login.server.model');

// Get Route to read data
router.get('/', function(req, res, next){
  return res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
});

// Post route for updating data. Submits data to be processed
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
          req.session.userId = Login._id;
          // want to redirect to /profile
          return res.redirect('/');
        }
      }
    });
  }
  else if(req.body.logusername && req.body.logpassword){
    Login.authenticate(req.body.logusername, req.body.logpassword, function(err, login){
      if(error || !login){
        var err = new Error('Something went wrong.');
        err.status = 401;
        return next(err);
      }
      else{
        req.session.userId = Login._id;
        return res.redirect('/')
      }
    });
  }
  else{
    var err = new Error('Something went wrong with your fields');
    err.status = 400;
    return next(err);
  }

});

router.post('/login', function(req, res, next){
  return res.send('POST login');
});

// Get Route after registering (Make /login our homepage) or else change to ('') instead?
router.get('/login', function (req, res, next){
  return res.send('get login');
})


// Get route for logging out
router.get('/logout', function(req, res, next){
  if(req.session){
    req.session.destroy(function (err){
      if(err){
        return next(err);
      }
      else{
        // redirect to /login if possible
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
