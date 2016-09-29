var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  pwd: String,
  firstName: String,
  lastName: String,
  isAccessible: Boolean
});

module.exports = mongoose.model('User', UserSchema);
