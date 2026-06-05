const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const multer = require("multer");

//Import model files
const Quality = require("../models/Video_quality");
const Uploads = require("../models/Uploads");

//Viedo upload configurations
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

//Routing
router.get("/videoquality", (req, res) => {
  res.render("video_quality");
});

router.post("/videoquality", upload.single("video"), async (req, res) => {
  try {
    console.log(newvideoquality);
    await newvideoquality.save();
    res.redirect("/videoquality");
  } catch (error) {
    console.error(error);
    res.render("video_quality");
  }
});

module.exports = router;
