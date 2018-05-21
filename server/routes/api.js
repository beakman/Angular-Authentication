const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb://imransilvake:Welcome1@ds129540.mlab.com:29540/angular-auth";
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = "secretKey";

// Connect to MongoDB
mongoose.connect(db, err => {
	if(err) {
		console.log("Error: " + err);
	} else {
		console.log("Connected Successfully");
	}
});

// verify token
function verifyToken(req, res, next) {
    let token = req && req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1];

    if(!req.headers && !req.headers.authorization || token === 'null') {
        return res.status(401).send('Unauthorized Request!');
    }

    if(token) {
        jwt.verify(token, secretKey, (err, payload) => {
            if (err) {
                return res.status(500).send('JsonWebTokenError: jwt malformed! Invalid Token!');
            }

            if(!payload) {
                return res.status(401).send('Unauthorized Request!');
            }

            req.userId = payload.subject;
            next();
        });
    } else {
        return res.status(401).send('Unauthorized Request!');
    }
}

// Route: '/' - optional
router.get('/', (req, res) => {
    res.send('Hello from API route');
});

// Registration
router.post('/register', (req, res) => {
	const userData = req.body;
    let user = new User(userData);

    User.findOne({email: userData.email}, (error, resUser) => {
		if(error) {
			console.log("Error: " + error);
		} else {
			// validate: user exists or not
			if(!resUser) {
			    // save user account
				user.save((error, registeredUser) => {
					if(error) {
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

// Login
router.post('/login', (req, res) => {
	const userData = req.body;

	User.findOne({email: userData.email}, (error, user) => {
		if(error) {
			console.log("Error: " + error);
		} else {
			// validate: user
			if(!user) {
				res.status(401).send("Invalid Email!");
			} else {
				// validate: password
				if(user.password !== userData.password) {
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

// Events
router.get('/events', (req, res) => {
	let data = [
		{
			"_id": "01",
			"name": "Imran Khan",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "02",
			"name": "John Markel",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "03",
			"name": "Sabine Auro",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "04",
			"name": "Joke Man",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "04",
			"name": "Tony Hills",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		}
	];

	res.json(data);
});

// Special Events
router.get('/special', verifyToken, (req, res) => {
	let data = [
		{
			"_id": "01",
			"name": "Imran Khan",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "02",
			"name": "John Markel",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "03",
			"name": "Sabine Auro",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "04",
			"name": "Joke Man",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "04",
			"name": "Tony Hills",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		}
	];

	res.json(data);
});

module.exports = router;
