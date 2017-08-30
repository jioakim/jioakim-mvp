var middlenameSchema = require('./db-config').middlenameSchema;
var mongoose = require('./db-config').mongoose;

var MiddleName = mongoose.model('MiddleName', middlenameSchema);


module.exports = MiddleName;