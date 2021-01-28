//Import Routes
const express = require('express')
//const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const mediaSort = require('./Routes/mediaSort')
//Needed for the process.env code
dotenv.config()
//Used to keep private information hidden

//Connecting to the db
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err))

//Middleware
app.use(cors())
app.use('/upload', mediaSort)

port = process.env.PORT

app.listen(port, () => console.log('listening on port ' + port) || 5000)
