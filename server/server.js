const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
//this before routes to enable cors for all routes
app.use(cors())
const mediaSort = require('./Routes/mediaSort')
// const userRoutes = require('./Routes/userRoutes')
const storeUser = require('./Routes/storeUser')


//Models
// require('./Model/UserModel')

//Needed for the process.env code, Used to keep private information hidden
dotenv.config()


//Connecting to the db
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err))


//Middleware
// A middleware which will extract req.body for us...allows express read req.body
app.use(express.json())
//endpoint to add new user
app.use('/register', storeUser)





app.use('/upload', mediaSort)
// app.use('/user', userRoutes)
// A middleware which will enable cors with various options like exposeHeader etc.
// app.use(cors({ exposeHeader: 'id' }))

// A middleware which will extract re.files for us
// app.use(fileuploader());


port = process.env.PORT
app.listen(port, () => console.log('listening on port ' + port) || 5000)