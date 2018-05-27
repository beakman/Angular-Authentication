const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// environment
const env = process.env.NODE_ENV || 'dev'; // NODE_ENV: set in package.json
const config = require('../config')[env];

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    salt: String
});

/**
 * set: password
 *
 * @param password
 */
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

/**
 * check: password
 *
 * @param password
 * @returns {boolean}
 */
userSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

/**
 * generate: JWT
 *
 * @returns {*}
 */
userSchema.methods.generateJWT = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 1); // 1 day

    let payload = {
        _id: this._id,
        name: this.name,
        email: this.email,
        exp: parseInt(expiry.getTime() / 1000)
    };

    return jwt.sign({ payload }, config.app.secret_key);
};

module.exports = mongoose.model('user', userSchema, 'users');
