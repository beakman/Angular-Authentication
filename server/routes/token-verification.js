const jwt = require('jsonwebtoken');

// environment
const env = process.env.NODE_ENV || 'dev'; // NODE_ENV: set in package.json
const config = require('../config')[env];

// token verification
const tokenVerification = {
    /**
     * validate token
     *
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    validate: (req, res, next) => {
        let token = req && req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1];

        if (token) {
            jwt.verify(token, config.app.secret_key, (err, payload) => {
                if (err) {
                    return res.status(500).send('JsonWebTokenError: jwt malformed! Invalid Token!');
                }

                if (!payload) {
                    return res.status(401).send('Unauthorized Request!');
                }

                req.userId = payload.subject;
                next();
            });
        } else {
            return res.status(401).send('Unauthorized Request!');
        }
    }
};

module.exports = tokenVerification;
