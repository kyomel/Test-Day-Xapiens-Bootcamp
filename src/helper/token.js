const jwt = require('jsonwebtoken');

module.exports = (User) =>
    jwt.sign({
        id: User.id,
        email: User.email
    }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 60 * 60
    });