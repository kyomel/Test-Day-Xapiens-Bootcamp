'use strict'

const { Author } = require('../db/models');
const response = require('../helper/response');
const setCache = require('../helper/redisClient');
const mailgun = require('../lib/mailgun');

class userController {
        static async getAuthor(req, res, next) {  
                try {
                    const payload = await Author.findAll();
                    setCache(req, payload);
                    response({ message: "get all authors!", data: payload })(res);
                } catch (err) {
                    res.status(400);
                    next(err);
                } 
        }
    
        static async getId(req, res, next) {
            try {
                const payload = await Author.findByPk(req.params.id);
                response({ message: "get spesific author!", data: payload })(res);
            } catch(err){
                res.status(400);
                next(err);
            }
        }
    
        static async delAuthor(req, res) {
            const payload = await Author.destroy({
                where: {
                    id: req.params.id
                }
            });
            response({ message: "author delete success", data: payload})(res, 200);
        }
    
        static async createAuthor(req, res, next) {
            try {
            const payload = await Author.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            })
            const data = {
                from: 'kyomel <michaellapandio04@gmail.com>',
                to: `${payload.dataValues.user.dataValues.email}`,
                subject: 'Siap - siap ada ledakan Buku Murah !',
                text: `Thank you to register to my app.....
                        regards
                        Michael Stevan`
            };
            await mailgun.messages().send(data);
            response({ message: "add author success", data: payload})(res, 200);
            } catch(err) {
                res.status(422);
                next(err);
            }
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
    
        static async uploadPhoto(req, res, next){
            try {
                let filename = req.file.filename;
                const payload = await Author.update({
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

module.exports = userController;