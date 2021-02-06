const router = require("express").Router();
const fs=require("fs");
const path = require("path")
router.get("/list",(req, res) => {
    fs.readdir("./uploadedFiles/audio",(err, files) => {
        if(err) console.log(err)
        else {
            files.forEach((file)=> {
                console.log(file)
            })
            res.json(files)
        }
    })
})
router.get("/media/:song",(req, res) => {
    const song = req.params.song
    res.sendFile(path.join(__dirname,`../uploadedFiles/audio/${song}`))

});

module.exports = router