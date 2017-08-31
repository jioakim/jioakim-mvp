var axios = require('axios');

//initial GET request, returns an array with one random object
exports.getInit = function(callback) {
  axios.get('http://127.0.0.1:3123/api/initial')
  .then(function(response) {
    callback(response.data);
  });
}

exports.postUserInputSubmit = function(userTextInput, callback) {
  var postObject = {userTextInput:userTextInput};
  axios.post('http://127.0.0.1:3123/api/userinput', postObject)
  .then(function(response){
    callback(response.data);
  });
}

//exports.getInit();