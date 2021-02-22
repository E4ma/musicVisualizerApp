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

const IconModel = require('../Model/IconModel')

// upload endpoint for ICONS...................................
router.post('/icon', async (req, res) => {
    console.log(req.files)

    if (req.files === null) {
        return res.status(400).json({ msg: 'no file found' })
     }
    
     const file = req.files.file

   //defines what the max size that can be uploaded otherwise will get an error
   if (file.size > fileSizeMax) {
      return res.status(413).json({ msg: 'File exceeds upload size' })
   }

     //This path decides where to send the file (React is the client)
  const mediaType = file.mimetype
  console.log('this is the media type-', mediaType)

  if (
    mediaType === 'image/jpeg' ||
    mediaType === 'image/jpg' ||
    mediaType === 'image/bmp' ||
    mediaType === 'image/png'
  ) {
    file.mv(`uploadedFiles/icons/${file.name}`)
    const filePath = `uploadedFiles/icons/${file.name}`
    //The code that coninues if a success
    res.json({
      fileName: file.name,
      filePath: `/uploadedFiles/icons/${file.name}`,
    })
    console.log('WRITE TO MONGO..........:')

    const newIcon = new IconModel({
      fileName: file.name,
      filePath: filePath,
    })
    console.log('newIcon...', newIcon)
    // This .save writes to the DB
    newIcon.save()
  } else {
    return res.status(500).send(console.error('Internal Server Error X|'))
  }

   
})


//export icon to displayer
router.get('/iconList', async (req, res) => {
  fs.readdir('./uploadedFiles/icons', (err, files) => {
    if (err) console.log(err, 'Some error in router.get /iconList')
    else {
      files.forEach((file) => {
        file
      })
      res.json(files)
    }
  })
})
//get from db
router.get('/icon/:iconImage', (req, res) => {
  const iconImage = req.params.iconImage
  res.sendFile(path.join(__dirname, `../uploadedFiles/icons/${iconImage}`))
})

module.exports = router
