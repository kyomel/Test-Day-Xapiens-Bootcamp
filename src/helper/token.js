const jwt = require('jsonwebtoken');

module.exports = (user) =>
    jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.SECRET_KEY);