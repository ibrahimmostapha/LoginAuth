const express = require('express')
const User = require('../models/user')
const bcrypt = require("bcrypt");

const router = express.Router()

//signup
router.post("/signup", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//signin
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({  email: req.body.email });
        !user && res.status(400).json("Wrong Email!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Password!");

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
