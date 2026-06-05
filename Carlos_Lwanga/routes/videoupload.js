const express = require("express");
const router = express.Router();
const multer = require("multer");
const { isvideoupload } = require("../middleware/auth")

const videoquality  = require("../models/videoQuality");
const Description = require("../models/VideoDescription");
const DateofPublishing = require("../models/DateOfPublishing");
const Uploadthumbnail = require("../models/Uploadthumbnail");

//Video upload configurations
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
let upload = multer({ storage: storage })

router.post("/videoupload", upload.single('video'), async (req, res) => {
    console.log("reached here");
    try {
        const newVideo = newVideo(req.body);
        newBattery.batteryImage = req.file.path
        console.log(newVideo);
        await newVideo.save();
    } catch (error) {
        console.error(error);
        res.render("video");
    }
});

router.get("/Videx", is, async (req, res) => {
    try {
        let videoupload = await videoupload.find({status: "Video added successfully"}).sort({ natural: -1 })

    } catch (error) {
        console.log(error)
        res.status(400).send("Unable to upload video in the Database.")
    }
})

router.get("/videoupload", (req, res) => {
    res.render("videoupload");
});

router.post("/videoquqlity", async (req, res) => {
    console.log("reached here");
    try {
        const newVideo = new Video(req.body);
        console.log(newVideo);
        await newVideo.save();
        res.redirect("/videoupload;");
    } catch (error) {
        console.error(error);
        res.render("video");
    }
});     

module.exports = router;