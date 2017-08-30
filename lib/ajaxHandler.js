var axios = require('axios');

//initial GET request, returns an array with one random obect
exports.getInit = function(callback) {
  axios.get('http://127.0.0.1:3123/api/result')
  .then(function (response) {
    callback(response.data);
  });
}

//exports.getInit();