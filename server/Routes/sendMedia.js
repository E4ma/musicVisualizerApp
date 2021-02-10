const router = require('express').Router()
const mm = require('music-metadata')
const util = require('util')
const axios = require('axios')

// axios.get('/songs', (req, res) => {
//   try {
//     if(!req.files){
//       res.send({
//         status: false,
//         message: 'No files'
//       })
//     } else {
//       const { song } = req.files

//       song
//     }
//   }
// })

// module.exports = getDemoSongs
