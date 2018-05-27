const express = require('express');
const router = express.Router();
const User = require('../models/user');

// registration
router.post('/register', (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    User.findOne({email: user.email}, (error, userFound) => {
        if (error) {
            console.log("Error: " + error);
        } else {
            // validate: user exists or not
            if (!userFound) {
                // save user account
                user.save((error) => {
                    if (error) {
                        console.log("Error: " + error);
                    } else {
                        let token = user.generateJWT();
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
