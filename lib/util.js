var FirstName = require('../models/first-name');
var MiddleName = require('../models/middle-name');
var Place = require('../models/place');
var _ = require('lodash');

//-------------------------------------------------
//--------------INITIAL REQUEST--------------------

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

//-------------------------------------------------
//--------------USER INPUT POST--------------------

exports.handleUserInputPost = function(req, res) {
  var userTextInput = req.body.userTextInput;
  // if it is a number return this number of records
  var id = '';
  var fNames = [];
  var mNames = [];
  var plcs = [];
  var sort = 1;

  if (!isNaN(userTextInput) && userTextInput !== '') {
    var num = Number(userTextInput);
    var gt200 = false;
    num = Math.floor(Math.abs(num));
    FirstName.count().exec()
    .then(function(fnNum){
      if (Math.random() > 0.5) {
        sort = -1;
      }
      if (fnNum > 200) {
        fnNum = 200;
      }
      if (num > fnNum) {
        gt200 = true;
        num = fnNum;
      }
      if (num === 0) {
        num = 1;
      }
    }).then(function(){

      FirstName.find().sort({rand: sort}).limit(num).exec()
      .then(function(firstNames){
        fNames = firstNames;

      }).then(function(){

        MiddleName.find().sort({rand: sort}).limit(num).exec()

        .then(function(middleNames){
          mNames = middleNames;

        }).then(function(){
          Place.find().sort({rand: sort}).limit(num).exec()

          .then(function(places){
            plcs = places;
            var arr = [];
            for (var i = 0; i < num; i++) {
              arr.push({firstName:fNames[i].toObject().firstName, middleName:mNames[i].toObject().middleName, place:plcs[i].toObject().place, id:fNames[i].toObject()._id, input:true});
            }
            arr = _.shuffle(arr);
            res.send({results:arr, gt200:gt200, inputForm:true, num:num});

          }).catch(function(error){
            console.log(error);
          });
        });
      });
    });
  } else {
    var random = Math.floor(Math.random()*200) + 1;
    FirstName.find().sort({rand: sort}).limit(random).exec()
    .then(function(firstNames){
      fNames = firstNames;
    }).then(function(){

      MiddleName.find().sort({rand: sort}).limit(random).exec()

      .then(function(middleNames){
        mNames = middleNames;

      }).then(function(){
        Place.find().sort({rand: sort}).limit(random).exec()

        .then(function(places){
          plcs = places;
          var arr = [];
          for (var i = 0; i < random; i++) {
            arr.push({firstName:fNames[i].toObject().firstName, middleName:mNames[i].toObject().middleName, place:plcs[i].toObject().place, id:fNames[i].toObject()._id, input:true})
          }
          arr = _.shuffle(arr);
          res.send({results:arr, random:random, inputForm:true});

        }).catch(function(error){
          console.log(error);
        });
      });
    });
  }
};

//----------------------------------------------------------------
//----------DELETE A RECORD FROM FIRSTNAMES WITH SPECIFIC ID------
exports.handleDelete = function(req, res) {
  console.log(req.params.firstname_id);
  FirstName.remove({_id: req.params.firstname_id}, function(err, firstName) {
    if (err) {
      res.send(err);
    }
    res.send('firstName sucessfully deleted');
  });
};