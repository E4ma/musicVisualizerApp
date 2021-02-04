//Import Routes
const express = require('express')
const fileuploader = require('express-fileupload')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
// const app = express()
// const mediaSort = require('./Routes/mediaSort')
// const audioDemo = require('./Routes/sendMedia')
// const userRoutes = require('./Routes/userRoutes')

//Needed for the process.env code
// dotenv.config()
//Used to keep private information hidden

//Connecting to the db
// mongoose
//   .connect(process.env.DB_CONNECT, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Could not connect to MongoDB...', err))

//Middleware
// app.use(express.json())
// app.use(cors())
// app.use('/upload', mediaSort)
// app.use('/user', userRoutes)
// app.use('/audioDemo', audioDemo)

//Models
require("./Model/UserModel");

const userRoutes = require("./Routes/userRoutes");


const app = express()

// A middleware which will enable cors with various options like exposeHeader etc.
app.use(cors({ exposeHeader: "id"}));
// A middleware which will extract req.body for us
app.use(express.json());
// A middleware which will extract re.files for us
app.use(fileuploader());

// Routes
app.use("/user", userRoutes);


//Connecting to the db 
mongoose
  .connect('mongodb://localhost/UploadImage', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log('We are connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });


// port = process.env.PORT
port = 5000

app.listen(port, () => {
  console.log('listening on port ' + port || 5000);
});
