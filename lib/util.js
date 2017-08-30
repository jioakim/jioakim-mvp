var FirstName = require('../models/first-name');
var MiddleName = require('../models/middle-name');
var Place = require('../models/place');

exports.handleGetInit = function(req, res) {
  var id = '';
  var firstName = '';
  var middleName = '';
  var place = '';
  FirstName.count().exec()
  .then(function(numFirstNames){
    var random = Math.floor(Math.random() * numFirstNames);
    return random;

  }).then(function(random){
    FirstName.findOne().skip(random).exec()

    .then(function(rFirstName){
      firstName = rFirstName.toObject().firstName;
      id = rFirstName.toObject()._id;

    }).then (function(){
      MiddleName.count().exec()

      .then(function(numMiddleNames){
        var random = Math.floor(Math.random() * numMiddleNames);
        return random;

      }).then(function(random){
        MiddleName.findOne().skip(random).exec()

        .then(function(rMiddleName){
          middleName = rMiddleName.toObject().middleName;

        }).then(function(){
          Place.count().exec()

          .then(function(numPlaces){
            var random = Math.floor(Math.random() * numPlaces);
            return random;

          }).then(function(random){
            Place.findOne().skip(random).exec()

            .then(function(rPlace){
              place = rPlace.toObject().place;
              var arr = [];
              arr.push({firstName:firstName, middleName:middleName, place: place, id:id, initial:true});
              res.send(JSON.stringify(arr));

            }).catch(function(err){
              console.log(err);
            });
          });
        });
      });
    });
  });
};