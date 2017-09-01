var axios = require('axios');

//initial GET request, returns an array with one random object
exports.getInit = function(callback) {
  axios.get('http://127.0.0.1:3123/api/result')
  .then(function(response) {
    callback(response.data);
  });
}

exports.getFirstName = function(firstName, callback) {
  axios.get('http://127.0.0.1:3123/api/result/' + firstName)
  .then(function(response) {
    callback(response.data);
  });
}

// post request from user input returns results
exports.postUserInputSubmit = function(userTextInput, callback) {
  var postObject = {userTextInput:userTextInput};
  axios.post('http://127.0.0.1:3123/api/result', postObject)
  .then(function(response){
    callback(response.data);
  });
}

exports.deleteFirstName = function(fnId, callback) {
  axios.delete('http://127.0.0.1:3123/api/result/' + fnId)
  .then(function(response){
    console.log(response);
    callback();
  }).catch(function (error) {
    console.log(error);
  });
}

exports.addFirstName = function(firstName, callback) {
  axios.post('http://127.0.0.1:3123/api/result/' + firstName)
  .then(function(response){
    callback(response.data);
  }).catch(function (error) {
    console.log(error);
  });
}

exports.updateFisrtName = function(fnId, fnUpdated, callback) {
  var updatedFirstName = {firstName:fnUpdated};
  axios.put('http://127.0.0.1:3123/api/result/' + fnId, updatedFirstName)
  .then(function(response) {
    callback(response.data);
  }).catch(function (error) {
    console.log(error);
  });
}