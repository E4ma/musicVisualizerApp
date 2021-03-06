const mongoose = require('mongoose')

let pictureSchema = new mongoose.Schema({
  // userId: {
  //     type: String,
  //     required: true,
  //     minlength: 3,
  //     maxlength: 255,
  // },
  fileName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  filePath: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  mimetype: {
    type: String,
    allowNull: false,
  },
})

module.exports = mongoose.model('Picture', pictureSchema)