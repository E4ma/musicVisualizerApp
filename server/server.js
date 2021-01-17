const express = require('express')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const app = express()
//Needed for the process.env code
dotenv.config()
//Used to keep private information hidden
port = process.env.PORT

app.use(fileUpload())

//Upload endpoints
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'no file found' })
  }
  //will define what file is in React
  const file = req.files.file

  //This path decides where to send the file (React is the client)
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    //The error message if there is a server error
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    //The code that coninues if a success
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
  })
})

app.listen(port, () => console.log('listening on port ' + port) || 5000)
