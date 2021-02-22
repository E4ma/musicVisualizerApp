const mongoose = require('mongoose')

let iconSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Icon', iconSchema)