const express = require('express');
const router = express.Router();
const User = require('../models/user');
const secretKey = "secretKey";

// login
router.post('/login', (req, res) => {
    const userData = req.body;

    User.findOne({ email: userData.email }, (error, userFound) => {
        if (error) {
            console.log("Error: " + error);
        } else {
            // validate: user
            if (!userFound) {
                res.status(401).send("Invalid Email!");
            } else {
                // validate: password
                if (userFound.validatePassword(userData.password)) {
                    let token = userFound.generateJWT();
                    res.status(200).send({token});
                } else {
                    res.status(401).send("Invalid Password!");
                }
            }
        }
    });
});

module.exports = router;
