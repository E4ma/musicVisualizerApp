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

const AudioModel = require("../Model/AudioModel")

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
  console.log('this is the media type-', mediaType)

  if (mediaType == 'audio/mpeg' || 'audio/mp3' || 'audio/flac' || 'audio/wav') {
    file.mv(`uploadedFiles/audio/${file.name}`)
<<<<<<< HEAD

    console.log('inside if1..........:')

    const filePath = `uploadedFiles/audio/${file.name}`

    console.log('before filepath..........:', filePath)
    // const metadata = await mm.parseFile(`${filePath}`)
    console.log('after filepath..........:')
=======
    console.log('Line 50')
    const filePath = `uploadedFiles/audio/${file.name}`
    console.log('Line 52', filePath)
    // const metadata = await mm.parseFile(`${filePath}`)
    // console.log("Line 54" )
>>>>>>> 9f6cac678f3f6a40a0561bf1a06f75ab7a8100a0
    // const parsedMetaData = util.inspect(metadata, {
    //   showHidden: false,
    //   depth: null,
    // })
<<<<<<< HEAD

    console.log('inside if2..........:')

    // console.log(`${parsedMetaData}`)

    console.log('inside if3..........:')
    // write to the DB here


=======
    // console.log(`${parsedMetaData}`)
>>>>>>> 9f6cac678f3f6a40a0561bf1a06f75ab7a8100a0
    res.json({
      fileName: file.name,
      filePath: filePath,
      // metaData: parsedMetaData,
<<<<<<< HEAD
    })

    console.log('WRITE TO MONGO..........:')
    console.log(req.files)
    const newAudio = new AudioModel({
      // fileName,
      // filePath,
      fileName: file.name,
      filePath: filePath
=======
>>>>>>> 9f6cac678f3f6a40a0561bf1a06f75ab7a8100a0
    })
    console.log('newAudio...', newAudio)
    newAudio.save()
    console.log('did it write to DB????...')


    // console.log('inside if3..........:')
    // // write to the DB here
    // console.log('WRITE TO MONGO..........:')
    // const newAudio = new AudioModel({
    //   fileName,
    //   filePath,
    // });
    // await newAudio.save()

    // await newAudio.save(function (err, audio) {
    //   if (err) {
    //     console.log(err);
    //     res.send(400, 'bad request');
    //   }
    //   console.log('record written to DB');
    // });

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

//export to displayer
router.get('/list', async (req, res) => {
  console.log('this is the req on line 80')
  fs.readdir('./uploadedFiles/audio', (err, files) => {
    if (err) console.log(err, 'Some error after line 81')
    else {
      files.forEach((file) => {
        console.log(file, 'line 85')
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
