const express = require("express");
const router = express.Router();
const passport = require("passport");

//import database file/ import registration model
const Registration = require("../models/Videx");

router.get("/join", (req, res) => {
  res.render("join");
});

  (req, res) => {
    if (req.user.role === "Video title") {
      res.redirect("/video title");
    } else if (req.user.role === "") {
      res.redirect("/Add video");
    } else if (req.user.role === "Add video") {
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  },

    res.redirect("/join");


module.exports = router;
