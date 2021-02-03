const { check, validationResult } = require('express-validator');
const { Author } = require('../db/models');

const authorValidationRules = () => {
    return [
        check('firstName').isLength({ max: 20}),
        check('lastName').isLength({ max: 30 }).optional({ nullable: true }),
        check('email').isEmail().custom(async(email) => {
            const existingAuthor = await Author.findOne({ email });
            if(existingAuthor) {
                throw new Error('Email already in use');
            }
        })
    ]
}

const validate = (req, res, next) =>  {
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

module.exports = { authorValidationRules, validate, }