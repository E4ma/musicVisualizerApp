const express = require("express")
const User = require('../Model/UserModel')
const router = express.Router()

router.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  })

router.get("/", (req, res) => {
	res.send(req.body)
})


router.post('/newUser', (req, res) => {
    //creating new user with req.body, matching model
    let {
        firstname,
        lastname,
        username,
        email,
        password
      } = req.body
    // res.send(req.body)
    User.create(req.body, (error, user) => {
        res.redirect('/')
        console.log(req.body)
    })

   
})

module.exports = router