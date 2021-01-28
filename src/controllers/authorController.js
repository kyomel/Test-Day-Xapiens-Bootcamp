'use strict'

const { Author } = require('../db/models');
const response = require('../helper/response');


class userController {
    static async getAuthor(req, res) {
        const payload = await Author.findAll();
        response({ message: "get all authors!", data: payload })(res);
    }

    static async getId(req, res) {
        const payload = await Author.findByPk(req.params.id);
        response({ message: "get spesific author!", data: payload })(res);
    }

    static async delAuthor(req, res) {
        const payload = await Author.destroy({
            where: {
                id: req.params.id
            }
        });
        response({ message: "author delete success", data: payload})(res, 200);
    }

    static async createAuthor(req, res) {
        const payload = await Author.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        response({ message: "add author success", data: payload})(res, 200);
    }

    static async updateAuthor(req, res) { 
        const payload = await Author.update({
            where: {
                id: req.params.id
            },
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        response({ message: "update author success", data: payload})(res, 200);
    }
}

module.exports = userController;