const express = require('express');
const router = express.Router();
const verify_token = require('./token-verification');

// get: events list
router.get('/events', verify_token.validate, (req, res) => {
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
