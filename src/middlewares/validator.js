const { check } = require('express-validator');
const { Author, Book, Publisher } =  require('../db/models');

class validator {
    static authorValidationRules = () => {
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

    static bookValidationRules = () => {
        return [
            check('authorId').exists().isNumeric(),
            check('publisherId').exists().isNumeric(),
            check('title').exists().isString(),
            check('price').exists().isDecimal(),
            check('year').exists().toDate().custom(async(year, { req }) => {
                // const dueDate = await Book.findOne( { year });
                const expireDate = new Date('2021-12-31');
                if(expireDate <= req.body.year){
                    throw new Error('Year must be valid before 2022');
                }
            })
        ]
    }

    static publisherValidationRules = () => {
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
}

module.exports = { validator };