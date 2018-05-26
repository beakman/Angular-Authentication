const jwt = require('jsonwebtoken');
const secretKey = "secretKey";

// token verification
const tokenVerification = {
    validate: (req, res, next) => {
        let token = req && req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1];

        if (token) {
            jwt.verify(token, secretKey, (err, payload) => {
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
