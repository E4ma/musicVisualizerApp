const mongoose = require('mongoose')

let user_Schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  }
})

module.exports = mongoose.model('User', user_Schema)

// ,
//   ProfileDp: {
//     Data: Buffer,
//     ContentType: String,
//   },