//Import Routes
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const mediaSort = require('./Routes/mediaSort')
//const download = require('./Routes/download')

//Models
// const UserModel = require('./UserModel')
const userRoutes = require('./Routes/userRoutes')

const app = express()

// A middleware which will extract req.body for us
app.use(express.json())

// Routes
app.use('/user', userRoutes)

//Middleware
app.use(cors())
app.use('/upload', mediaSort)

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

port = process.env.PORT

app.listen(port, () => console.log('listening on port ' + port) || 5000)
