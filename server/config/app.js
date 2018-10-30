const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// connect mongoose to database
// requires mongod to already be working
mongoose.connect(config.database);

// if connected print out line
mongoose.connection.on('connected', () => {
  console.log('Connected to database' + config.database);
});

// if not connected
mongoose.connection.on('error', (err) => {
  console.log('database error ' + err);
});

const app = express();

const users = require('./routes/users');

const port = 3000;

// use cors
app.use(cors());

app.use(express.static(path.join(__dirname, 'client')));

// use body parser
app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) =>{
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
