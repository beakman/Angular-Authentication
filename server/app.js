const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routes/api');

// environment
const env = process.env.NODE_ENV || 'dev'; // NODE_ENV: set in package.json
const config = require('./config')[env];

// cors
app.use(cors());
app.use(bodyParser.json());

// listen to Server
const port = config.app.port;
app.listen(port, () => console.log("Server Running on Localhost " + port));

// connect to database
const db_URL = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
mongoose.connect(db_URL, err => {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Database Connected Successfully!");
    }
});

// routes
app.get('/', (req, res) => res.send("Application Started!"));
app.use('/api', api);
