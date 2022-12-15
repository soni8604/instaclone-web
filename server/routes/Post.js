const express = require("express");
const router = express.Router();
const upload=require("../utility/multer")
const fs = require("fs")
const cloudinary = require("../utility/cloudinary")

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "public/images")
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// // })
// const storage=multer.diskStorage({})

// const upload = multer({ storage: storage , limits: {fileSize: 2* 1024 * 1024 }})

const post = require("../models/post");

router.get("/posts", async (req, res) => {
    try {
        const data = await post.find()
        .sort("-createdAt")
        res.json({
            data
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});

router.post("/createPost", upload.single('PostImage'), async (req, res) => {
    try {
        const result=await cloudinary.uploader.upload(req.file.path);
       
        const data = new post({
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            url:result.secure_url,
            cloudinary_id: result.public_id
        })
        await data.save()
        res.json({
            data
        })
    } catch (err) {
        res.json({
            message: err.message
        })
    }

})


module.exports = router;