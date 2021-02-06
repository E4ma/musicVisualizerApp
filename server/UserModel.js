const mongoose = require('mongoose')

let user_Schema = new mongoose.Schema({
  name: {
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
    maxlength: 255,
  },
  ProfileDp: {
    Data: Buffer,
    ContentType: String,
  },
});

module.export =  mongoose.model("User", user_Schema);
