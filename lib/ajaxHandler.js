var axios = require('axios');

//initial GET request, returns an array with one random object
exports.getInit = function(callback) {
  axios.get('http://127.0.0.1:3123/api/initial')
  .then(function(response) {
    callback(response.data);
  });
}

// post request from user input returns results
exports.postUserInputSubmit = function(userTextInput, callback) {
  var postObject = {userTextInput:userTextInput};
  axios.post('http://127.0.0.1:3123/api/userinput', postObject)
  .then(function(response){
    callback(response.data);
  });
}

exports.deleteFirstName = function(id) {
  axios.delete('http://127.0.0.1:3123/api/result/' + id)
  .then(function(response){
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}