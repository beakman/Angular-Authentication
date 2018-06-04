const express = require('express');
const router = express.Router();

const register = require('./register');
const login = require('./login');

// routes
router.get('/', (req, res) => res.send('Application Route!'));
router.use(register);
router.use(login);

module.exports = router;
