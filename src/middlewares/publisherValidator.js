const { check, validationResult } = require('express-validator');
const { Publisher } =require('../db/models');

const publisherValidationRules = () => {
    return [
        check('name').exists().isString(),
        check('address').exists().isString(),
        check("email").exists().isEmail().custom(email => {
            return Publisher.findOne( { where: {
            email: email
            }}).then(author => {
            if (author) {
                return Promise.reject('E-mail already in use');
            }
            });
        }),
        check('phone').exists(),
        check('website').optional({ nullable: true })
    ]
}



module.exports = { publisherValidationRules }; 