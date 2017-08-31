 var express = require('express');
 //var mongoose = require('mongoose');
 var util = require('./lib/util');
 var bodyParser = require('body-parser');

 var app = express();

 // Parse JSON
 app.use(bodyParser.json());
 // Parse forms (posts from user)
 app.use(bodyParser.urlencoded({ extended: true }));

// CORS headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


// set up api routes
// endpoint for a single result that shows at start up
app.get('/api/initial', util.handleGetInit);

// posts for input, -> LATER...first name, middlename, place
app.post('/api/userinput', util.handleUserInputPost);

//starts the server and listens for requests
app.listen(3123, function() {
  console.log(`api running on port 3123`);
});