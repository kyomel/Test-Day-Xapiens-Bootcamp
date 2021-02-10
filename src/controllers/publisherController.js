'use strict'

const { Publisher } = require('../db/models');
const response = require('../helper/response');
// const setCache = require('../helper/redisClient');

class publisherController {
    static async getPublisher(req, res) {
        const payload = await Publisher.findAll();
        // setCache(req, payload);
        response({ message: "get all publishers!", data: payload })(res);
    }

    static async getId(req, res) {
        const payload = await Publisher.findByPk(req.params.id);
        response({ message: "get spesific Publishers!", data: payload })(res);
    }

    static async delPublisher(req, res) {
        const payload = await Publisher.destroy({
            where: {
                id: req.params.id
            }
        });
        response({ message: "publisher delete success"})(res, 200);
    }

    static async createPublisher(req, res) {
        const payload = await Publisher.create({
            name: req.body.name,
            adddress: req.body.adddress,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website
        })
        response({ message: "add publisher success", data: payload})(res, 200);
    }

    static async updatePublisher(req, res) { 
        const payload = await Publisher.update({
            where: {
                id: req.params.id
            },
            name: req.body.name,
            adddress: req.body.adddress,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website
        })
        response({ message: "update publisher success", data: payload})(res, 200);
    }

}

module.exports = publisherController;