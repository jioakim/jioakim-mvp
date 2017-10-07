 var express = require('express');
 //var mongoose = require('mongoose');
 var util = require('./lib/util');
 var bodyParser = require('body-parser');

 var app = express();

 // Parse JSON
 app.use(bodyParser.json());
 // Parse forms (posts from user)
 app.use(bodyParser.urlencoded({ extended: true }));
 var router = express.Router();

// CORS headers
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",  "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


// set up api routes
router.route('/result').get(util.handleGetInit);
router.route('/result/:firstname').get(util.handleGetFirstName);
router.route('/result').post(util.handleUserInputPost);
router.route('/result/:newuser').post(util.handleNewUserPost);
router.route('/result/:firstname_id').put(util.handleUserUpdate);
router.route('/result/:firstname_id').delete(util.handleDelete);
app.use('/api', router);
//starts the server and listens for requests

app.use(express.static(__dirname + '/src'));
app.listen(3123, function() {
  console.log(`api running on port 3123`);
});
