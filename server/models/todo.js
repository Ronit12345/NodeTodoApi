var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, //the text value must exist otherwise there will be an error
    minlength: 1, // minimum length of the string is set
    trim: true  //trims any void space at the beginning or at the end
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
