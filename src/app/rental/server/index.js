const cors = require("cors");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const Rental =require('./models/rental');
var dburl = 'mongodb://jmccommas:Monster2018!@ds151393.mlab.com:51393/bwm-ng-dev';
// var retry = null;
mongoose.connect((dburl), function(err) {
  mongoose.connection.on('connected', function() {
      console.log('Mongoose connected to ' + dburl);
    });
    mongoose.connection.on('error', function(err) {
      console.log('Mongoose connection error: ' + err);
    });
    mongoose.connection.on('disconnected', function() {
      console.log('Mongoose disconnected');
    });
  
});

app.get('/rentals', (req, res) => {
   res.json({'success': true})
});




// Define the port to run on
app.set('port', 3000);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Add middleware to console log every request
app.use(cors())
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});
//http:localhost:3000/uploads/
// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/fonts', express.static(__dirname + '/fonts'));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add some routing
// app.use('/api', routes);

// Listen for requests
 const PORT= process.env.PORT ||3001;
const server = app.listen(PORT, function() {
  const port = server.address().port;
  console.log('Magic happens on port ' + port);
});
// CONNECTION EVENTS
