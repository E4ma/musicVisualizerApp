const express = require("express")
const User = require('../Model/UserModel')
const router = express.Router()


router.get("/", async (req, res) => {
	res.send(req.body)
})


router.post('/signUp', async (req, res) => {


  const doesEmailExist = await User.findOne({ email: req.body.email });
  // throw error when email already registered
  if (doesEmailExist)
    return res.status(400).json({ error: "Email already exists" });

    //creating new user with req.body, matching model
const user = new User({
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  username: req.body.username,
  email: req.body.email,
  password: req.body.password
})
try {
  const savedUser = await user.save();
  res.json({ error: null, data: savedUser });
} catch (error) {
  res.status(400).json({ error });
}
})

// login route
router.post("/signIn", async (req, res) => {

  const user = await User.findOne({ email: req.body.email });


    res.json({
      error: null,
      data: {
        message: "Login successful",
      },
    })

});

   


module.exports = router