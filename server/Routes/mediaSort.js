const router = require('express').Router()
const fileUpload = require('express-fileupload')

router.use(fileUpload())

//max file size
const fileSizeMax = 1000000
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
router.post('/media', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'no file found' })
  }
  //will define what file is in React
  const file = req.files.file
  if (file.size > fileSizeMax) {
    return res.status(413).json({ msg: 'File exceeds upload size' })
  }

  //This path decides where to send the file (React is the client)
  const mediaType = file.mimetype

  switch (mediaType) {
    case 'audio/wav' || 'audio/mp3':
      file.mv(`uploadedFiles/audio/${file.name}`)

      res.json({
        fileName: file.name,
        filePath: `/uploadedFiles/audio/${file.name}`,
      })

      break
    case 'image/jpeg' || 'image/jpg' || 'image/bmp':
      file.mv(`uploadedFiles/images/${file.name}`)
      //The code that coninues if a success
      res.json({
        fileName: file.name,
        filePath: `/uploadedFiles/images/${file.name}`,
      })
      break
    default:
      console.error(err)
      return res.status(500).send(console.log('WRONG!!'))
  }
})

module.exports = router
