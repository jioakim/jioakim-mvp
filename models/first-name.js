var firstnameSchema = require('./db-config').firstnameSchema;
var mongoose = require('./db-config').mongoose;

var FirstName = mongoose.model('FirstName', firstnameSchema);

module.exports = FirstName;