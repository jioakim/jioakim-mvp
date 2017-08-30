var placeSchema = require('./db-config').placeSchema;
var mongoose = require('./db-config').mongoose;

var Place = mongoose.model('Place', placeSchema);


module.exports = Place;