'use strict'

const { Book, Author, Publisher } = require('../db/models');
const response = require('../helper/response');
// const setCache = require('../helper/redisClient');
const { set } = require('../../server');

class bookController {
    static async getBook(req, res) {
        const limit = req.query.limit || 10
        const page = req.query.page || 1
        const payload = await Book.findAll({
            limit,
            page,
            offset: ((limit * page) - limit)
        });
        // setCache(req, payload);
        response({ message: "get all books!", data: payload })(res);
    }

    static async getId(req, res, next) {
        try {
            const payload = await Book.findByPk(req.params.id);
            response({ message: "get spesific book!", data: payload })(res);
        } catch(err) {
            res.status(404);
            next(err);
        }   
    }

    static async delBook(req, res) {
        const payload = await Book.destroy({
            where: {
                id: req.params.id
            }
        });
        response({ message: "book delete success"})(res, 200);
    }

    static async createBook(req, res) {
        const payload = await Book.create({
            authorId: req.body.authorId,
            publisherId: req.body.publisherId,
            title: req.body.title,
            price: req.body.price,
            year: req.body.year
        })
        response({ message: "add book success", data: payload})(res, 200);
    }

    static async updateBook(req, res) { 
        const payload = await Book.update({
            where: {
                id: req.params.id
            },
            authorId: req.body.authorId,
            publisherId: req.body.publisherId,
            title: req.body.title,
            price: req.body.price,
            year: req.body.year
        })
        response({ message: "update book success", data: payload})(res, 200);
    }

    static async getBookAuthor(req, res) {
        const payload = await Book.findAll({
            include: [{
                model: Author,
                where: {
                    id: req.params.id,
                },
            }],   
        })
        response({ message: "get book with author success", data: payload})(res, 200);
    }

    static async getAuthorPublisher(req, res) {
        const payload = await Publisher.findAll({
            include: {
                model: Book,
                where: {
                    id: req.params.id
                },
                include: {
                    model: Author,
                },
            },
        })
        response({ message: "get publisher with author success", data: payload})(res, 200);
    }

    static async getBookSpesific(req, res) {
        const sort = req.query.sort_by
        const order = req.query.order_by

        if(sort === req.query.sort_by && order === req.query.order_by){
            const payload = await Book.findAll({
                order: [
                    [sort, order],
                ],
            })
            response({ message: "retrieved user", data: payload})(res, 200);
        }
    }

    static async getAuthorPublisher(req, res) {
        const payload = await Author.findOne({
            include: {
                model: Publisher,
                attributes: ['name', 'address'],
                through: {
                    attributes: [],
                },
            },
        }, {
            where: {
                id: req.params.id
            }
        })
        response({ message: "retrieved author and publisher", data: payload})(res, 200);
    }

    static async uploadCover(req, res, next) {
        try {
            let filename = req.file.filename;
            const payload = await Book.update({
                photo: filename
            },
            {
                where: {
                    id: req.params.id
                }
            })
            response({ message: "Success to upload photo", data: payload})(res,200)
        } catch(err) {
            res.status(400);
            next(err);
        }
    }       
}

module.exports = bookController;