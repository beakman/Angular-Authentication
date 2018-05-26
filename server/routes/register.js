const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = "secretKey";

// registration
router.post('/register', (req, res) => {
    const userData = req.body;
    let user = new User(userData);

    User.findOne({email: userData.email}, (error, resUser) => {
        if (error) {
            console.log("Error: " + error);
        } else {
            // validate: user exists or not
            if (!resUser) {
                // save user account
                user.save((error, registeredUser) => {
                    if (error) {
                        console.log("Error: " + error);
                    } else {
                        let payload = { subject: registeredUser._id };
                        let token = jwt.sign(payload, secretKey);
                        res.status(200).send({token});
                    }
                });
            } else {
                // user account already exists
                res.status(401).send("User account already exists!");
            }
        }
    });
});

module.exports = router;
