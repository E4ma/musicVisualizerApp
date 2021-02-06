const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const UserModel = mongoose.model("User");

router.get('/image/:id', async (req, res) => {
    const { id } = req.params
    const user = await UserModel.findById({ _id: id })
    //Checking if user with the given id exists
    if (!user) res.sendStatus(404).send('Hey user might have been here and it is no more')
    // Setting response type to
    res.type('Content-Type', user.ProfileDp.ContentType)
    res.status(200).send(user.ProfileDp.Data);
  });
  
  router.post('/new', async (req, res) => {
    const { name, email, password } = req.body
  
    //Some basic Validation
    if (!name || !email || !password )
      res.sendStatus(400).send('Please you need to enter valid information')
    let user = new UserModel({
      name,
      email,
      password,
    });
    //Extracting data mimetype from req.files.file
    if (req.files) {
      const { data, mimetype } = req.files.file;
      user.ProfileDp.Data = data;
      user.ProfileDp.ContentType = mimetype;
    }
  
  await user.save();
  // Sending user._id through res header
  res.send({"id": user._id});
  });
  router.get("/get/:id", async (req, res) => {
    const { id } = req.params;
    // Finding a user with given id and selecting name and _id
    const user = await UserModel.findOne({ _id: id});
    //Checking if user with the given id exists
    if (!user) res.sendStatus(400);
    res.send(user);
  });

module.exports = router;