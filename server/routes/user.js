const express = require('express');
const router = express.Router();
const User = require('../models/user');
const verify_token = require('./token-verification');

// get: specific member
router.get('/user', verify_token.validate, (req, res) => {
    const userData = req.body;

    User.find({ email: userData.email }, (err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

module.exports = router;
