const { check, validationResult } = require('express-validator');
const { Author } = require('../db/models');

const authorValidationRules = () => {
    return [
        check('firstName').exists().isLength({ max: 20}),
        check('lastName').isLength({ max: 30 }).optional({ nullable: true }),
        check("email").exist().isEmail().custom(email => {
            return Author.findOne( { where: {
            email: email
            }}).then(author => {
            if (author) {
                return Promise.reject('E-mail already in use');
            }
            });
        }),
    ]
}

const validateAuthor = (req, res, next) =>  {
    const errors = validationResult(req)
    if(errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = { authorValidationRules, validateAuthor, }