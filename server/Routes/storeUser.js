const express = require("express")
const User = require('../Model/UserModel')
const router = express.Router()



router.get("/users", async (req, res) => {
	const users = ["sample", "sally"]
	res.send({
        users: users
    })
})

router.post('/create_user', async (req, res) => {
    req.body = createUser
    let createUser = new User({
              firstname,
              lastname,
              username,
              email,
              password
    })
    await createUser.save()
    res.status(200).send(`Welcome to Hummingbird ${req.body.firstname}`)
})

module.exports = router