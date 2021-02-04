const { check } = require('express-validator');
const { Author } = require('../db/models');

const authorValidationRules = () => {
    return [
        check('firstName').exists().isLength({ max: 20}),
        check('lastName').isLength({ max: 30 }).optional({ nullable: true }),
        check("email").exists().isEmail().custom(email => {
            return Author.findOne( { where: {
            email: email
            }}).then(author => {
            if (author) {
                return Promise.reject('E-mail already in use');
            }
            });
        })
    ]
}



module.exports = { authorValidationRules };