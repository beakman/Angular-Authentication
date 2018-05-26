const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = "secretKey";

// login
router.post('/login', (req, res) => {
    const userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log("Error: " + error);
        } else {
            // validate: user
            if (!user) {
                res.status(401).send("Invalid Email!");
            } else {
                // validate: password
                if (user.password !== userData.password) {
                    res.status(401).send("Invalid Password!");
                } else {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, secretKey);
                    res.status(200).send({token});
                }
            }
        }
    });
});

module.exports = router;
