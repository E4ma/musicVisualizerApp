const express = require('express')
const UserModel = require('../Model/UserModel')
const router = express()

router.get('/image/:id', async (req, res) => {
  const { id } = req.params
  const user = await UserModel.findById({ _id: id })
  //Checking if user with the given id exists
  if (!user) {
    return res.send(404)
  }
  // Setting response type to
  res.type('Content-Type', user.ProfileDp.ContentType)
  res.status(200).send(user.ProfileDp.Data)
})

router.post('/new', async (req, res) => {
  const { name, email, password } = req.body
  console.log('This is the request body')
  console.log(req.body)
  //Some basic Validation
  // if (!name || !email || !password || !req.files) {
  if (!name || !email || !password) {
    return res.status(400).send('Please enter valid data')
  }
  console.log('before the new UserModel')
  let user = new UserModel({
    name,
    email,
    password,
  })
  //Extracting data and mimetype from req.files.file Commented files out to decide if needed
  // const { data, mimetype } = req.files.file
  // user.ProfileDp.Data = data
  // user.ProfileDp.ContentType = mimetype
  console.log('after the new UserModel')
  await user.save()
  // Sending user._id through res header
  res.header('id', user._id).status(201)
  res.status(200).send('Went through')
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  // Finding a user with given id and selecting name and _id
  const user = await UserModel.findById({ _id: id }).isSelected({
    _id: 1,
    name: 1,
  })
  //Checking if user with the given id exists
  if (!user) {
    return res.status(400)
  }
  res.send(user)
})

module.exports = router
