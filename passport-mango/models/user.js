var mongoose = require('mongoose');

let UserModel = mongoose.model('User', {
  username: String,
  password: String,
  email: String,
  gender: String,
  address: String
});

module.exports = UserModel;