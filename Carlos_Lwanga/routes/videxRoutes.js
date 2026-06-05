const express = require("express");
const router = express.Router();
const Videx = require("../models/Join");



router.post("/users/update/:id", async (req, res) => {
  try {
    await videoupload.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/usersList");
  } catch (error) {
    res.status(400).send("Unable to update user in the Database.");
  }
});

router.post("/users/delete", async (req, res) => {
  try {
    await videoupload.deleteOne({ _id: req.body.id });
    res.redirect("/usersList");
  } catch (error) {
    res.status(400).send("Unable to delete users in the Database.");
  }
});

module.exports = router;
