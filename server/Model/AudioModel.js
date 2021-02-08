const mongoose = require('mongoose')

let audioSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('Audio', audioSchema)