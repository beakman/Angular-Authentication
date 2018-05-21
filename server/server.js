const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const api = require('./routes/api');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

// Route: '/' - optional
app.get('/', (req, res) => {
	res.send("Hello from Server route");
});

// Listen to Server
app.listen(PORT, () => {
	console.log("Server Running on Localhost " + PORT);
});
