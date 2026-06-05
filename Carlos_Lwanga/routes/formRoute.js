const express = require("express");
const router = express.Router();

const Videx = require("../models/join");

//The routes
router.get("/", (req, res) => {
    res.render("index")
})

router.get("/form", async (req, res) => {
    try {
        const videoUpload = await videoUpload.find()
        res.render("form", {Uploaded})
    } catch (error) {
        console.error(error)
    }
})

router.post("/form", async (req, res) => {
    try {
        const newID = "#64534" + Math.trunc(Math.random() * 10)
        const newRegistration = new videoUpload({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
            color: req.body.color,
            ID: newID
        })
        await newVideoupload.save()
        res.redirect("/form")
    } catch (error) {
        console.error(error)
    }
})

router.post("/delete", async (req, res) => {
    try {
        await Registration.deleteMany({});
        res.redirect("/form")
    } catch (error) {
        console.error(error)
    }
})



module.exports = router;