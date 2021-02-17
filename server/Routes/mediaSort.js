const router = require('express').Router()
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')

//enable the file upload
router.use(fileUpload())
//max file size
const fileSizeMax = 100000000
//Upload endpoints
//Upload endpoints for Icons

const AudioModel = require('../Model/AudioModel')
const ImageModel = require('../Model/ImageModel')

// ICONS...................................
router.post('/icon', (req, res) => {
  const file = req.files.file

  //defines what the max size that can be uploaded otherwise will get an error
  if (file.size > fileSizeMax) {
    return res.status(413).json({ msg: 'File exceeds upload size' })
  }

  if (req.files === null) {
    return res.status(400).json({ msg: 'no file found' })
  }

  file.mv(`uploadedFiles/icons/${file.name}`)

  console.log(file)

  res.json({
    fileName: file.name,
    filePath: `/uploadedFiles/icons/${file.name}`,
  })
})


// AUDIO........................
//Upload endpoints for music and audio not related to the icon
router.post('/media', async (req, res) => {

  console.log(req.files)

  if (req.files === null) {
    return res.status(400).json({ msg: 'no file found' })
  }
  //will define what file is in React
  const file = req.files.file
  console.log('file..........', file)
  if (file.size > fileSizeMax) {
    return res.status(413).json({ msg: 'File exceeds upload size' })
  }

  //This path decides where to send the file (React is the client)
  const mediaType = file.mimetype
  console.log('this is the media type........', mediaType)

  if (
    mediaType === 'audio/mpeg' ||
    mediaType === 'audio/mp3' ||
    mediaType === 'audio/flac' ||
    mediaType === 'audio/wav'
  ) {
    file.mv(`uploadedFiles/audio/${file.name}`)
    const filePath = `uploadedFiles/audio/${file.name}`

    //SN: METADATA stuff commented out for now!
    // const metadata = await mm.parseFile(`${filePath}`)
    // console.log("Line 54" )
    // const parsedMetaData = util.inspect(metadata, {
    //   showHidden: false,
    //   depth: null,
    // })
    // console.log(`${parsedMetaData}`)

    res.json({
      fileName: file.name,
      filePath: filePath,
      // metaData: parsedMetaData,
    })

    console.log('WRITE audio TO MONGO...')
    console.log(req.files)
    const newAudio = new AudioModel({
      fileName: file.name,
      filePath: filePath,
    })
    console.log('Record written to Mongo...', newAudio)
    // This .save writes to the DB
    newAudio.save()

    // else do IMAGES........................

  } else if (
    mediaType === 'image/jpeg' ||
    mediaType === 'image/jpg' ||
    mediaType === 'image/bmp'
  ) {
    file.mv(`uploadedFiles/images/${file.name}`)
    const filePath = `uploadedFiles/images/${file.name}`

    res.json({
      fileName: file.name,
      filePath: filePath,
    })

    console.log('file path...', filePath)
    console.log('WRITE image TO MONGO...')

    const newImage = new ImageModel({
      fileName: file.name,
      filePath: filePath,
    })

    // This .save writes to the DB
    console.log('Record written to Mongo...', newImage)
    newImage.save()

    // else throw an ERROR........................
  } else {
    return res.status(500).send(console.error('Internal Server Error X|'))
  }
})

//export to displayer
router.get('/list', async (req, res) => {
  fs.readdir('./uploadedFiles/audio', (err, files) => {
    if (err) console.log(err, 'Some error in router.get /list')
    else {
      files.forEach((file) => {
        file
      })
      res.json(files)
    }
  })
})
router.get('/media/:song', (req, res) => {
  const song = req.params.song
  res.sendFile(path.join(__dirname, `../uploadedFiles/audio/${song}`))
})

module.exports = router
