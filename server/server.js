//Import Routes
const express = require('express')
//const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const mediaSort = require('./Routes/mediaSort')
//Needed for the process.env code
dotenv.config()
//Used to keep private information hidden

//Middleware
app.use(cors())
//app.use(fileUpload())
app.use('/upload', mediaSort)

port = process.env.PORT

app.listen(port, () => console.log('listening on port ' + port) || 5000)
