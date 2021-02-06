const router = require('express').Router()
const fileUpload = require('express-fileupload')
const mm = require('music-metadata')
const util = require('util')
//enable the file upload
router.use(fileUpload())
//max file size
const fileSizeMax = 100000000
//Upload endpoints
//Upload endpoints for Icons
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

  res.json({
    fileName: file.name,
    filePath: `/uploadedFiles/icons/${file.name}`,
  })
})

//Upload endpoints for music and audio not related to the icon
router.post('/media', async (req, res) => {
  // console.log(req.files)
  if (req.files === null) {
    return res.status(400).json({ msg: 'no file found' })
  }
  //will define what file is in React
  const file = req.files.file
  // console.log(file)
  if (file.size > fileSizeMax) {
    return res.status(413).json({ msg: 'File exceeds upload size' })
  }

  //This path decides where to send the file (React is the client)
  const mediaType = file.mimetype
  console.log(mediaType)

  if (mediaType == 'audio/mpeg' || 'audio/mp3' || 'audio/flac' || 'audio/wav') {
    file.mv(`uploadedFiles/audio/${file.name}`)
console.log("Line 50" )
    const filePath = `uploadedFiles/audio/${file.name}`
    console.log("Line 52", filePath )
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
  } else if (mediaType == 'image/jpeg' || 'image/jpg' || 'image/bmp') {
    file.mv(`uploadedFiles/images/${file.name}`)
    //The code that coninues if a success
    res.json({
      fileName: file.name,
      filePath: `/uploadedFiles/images/${file.name}`,
    })
  } else {
    return res.status(500).send(console.error('Internal Server Error X|'))
  }
})

module.exports = router
