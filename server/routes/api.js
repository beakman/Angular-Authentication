const express = require('express');
const router = express.Router();

const register = require('./register');
const login = require('./login');
const events = require('./events');
const user = require('./user');

// routes
router.get('/', (req, res) => res.send('Application Route!'));
router.use(register);
router.use(login);
router.use(events);
router.use(user);

module.exports = router;
