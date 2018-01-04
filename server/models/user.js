var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true, //the text value must exist otherwise there will be an error
    minlength: 1, // minimum length of the string is set
    trim: true  //trims any void space at the beginning or at the end
  }
});

module.exports = {User};
