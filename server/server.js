//Import Routes
const express = require('express')
// const fileuploader = require('express-fileupload')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
// const app = express()
const mediaSort = require('./Routes/mediaSort')
const download = require('./Routes/download')



//Models
require("./UserModel");
const userRoutes = require("./routes");

const app = express()
// A middleware which will enable cors with various options like exposeHeader etc.
app.use(cors({ exposeHeader: "id"}));
// A middleware which will extract req.body for us
app.use(express.json());
// A middleware which will extract re.files for us
// app.use(fileuploader());

// Routes
app.use("/user", userRoutes);


//Needed for the process.env code
dotenv.config()
//Used to keep private information hidden

//Connecting to the db
// mongoose
//   .connect(process.env.DB_CONNECT, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Could not connect to MongoDB...', err))

  //Connecting to the db 
mongoose
.connect('mongodb://localhost/UploadUserInfo', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(() => {
  console.log('We are connected to MongoDB');
})
.catch((err) => {
  console.log(err.message);
});



//Middleware
app.use(cors())
app.use('/upload', mediaSort)
app.use('/download', download)


port = process.env.PORT

app.listen(port, () => console.log('listening on port ' + port) || 5000)
