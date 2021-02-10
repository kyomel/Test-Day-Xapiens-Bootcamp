'use strict'

const bcrypt = require('bcrypt');
const Queue = require('bull');
const QueueMQ = require('bullmq');
const { setQueues, BullMQadapter, BullAdapter } = require('bull-board');

const { User } = require('../db/models');
const serviceQueueMail= require('../lib/welcomeEmail');
// const sendMailUser = require('../lib/emailUser');
const path = require('path');
// const cloudinary = require('../middlewares/cloudinary');
const cloudinary = require('../middlewares/cloudinary');
require('dotenv').config();
const response = require('../helper/response');
const token = require('../helper/token');

// const mailgun = require('../lib/mailgun');
class userControl {
    static async register(req, res, next) {
        let {
            firstName,
            lastName,
            email,
            password,
            role,
            photo
        } = req.body
        try {
            const payload = await User.create({
                firstName,
                lastName,
                email,
                password, 
                role,
                photo
            })
            serviceQueueMail.welcomeEmail(payload.email);
            // sendMail(mailgun);
            return response({ message: "User register is success!", data: payload })(res, 200)
        } catch(err) {
            res.status(422);
            next(err);
        }
    }

    static async getAll(req, res, next) {
        try {
            const payload = await User.findAll();
            return response({ message: "Get all user is success!", data: payload })(res, 200)
        } catch(err) {
            res.status(422);
            next(err);
        }
    }

    static async getId(req, res, next) {
        try {
            const payload = await User.findOne({
                where: {
                    id: req.params.id
                }
            });
            return response({ message: "Get user success", data: payload})(res, 200)
        } catch(err) {
            res.status(422);
            next(err);
        }
    }

    static async updateUser(req, res, next) {
        try {
            const payload = await User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }, {
                where: {
                    id: req.params.id
                }
            })
            return response({ message: "update user success", data: payload})(res, 200)
        } catch(err) {
            res.status(422);
            next(err)
        }
    }

    static async delUser(req, res, next) {
        try {
            const payload = await User.destroy({
                where: {
                   id: req.params.id 
                }
            })
            return response({ message: "delete user success", data: payload})(res,200)
        } catch(err) {
            res.status(422);
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const payload = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(!payload) {
                throw new Error(`Email ${req.body.email} doesn't exist!`)
            }
            const isPassword = await bcrypt.compareSync(req.body.password, payload.password)
            if(!isPassword) {
                throw new Error(`Wrong password!`)
            }
            // sendMailUser(instance.email);
            return response({ message: "Login success", data: token(payload)})(res, 200)
        } catch (err){
            res.status(403);
            next(err);
        }
    }

    static async profile(req, res) {
        res.status(200);
        return res.json(req.user.entity);
    }

    static async uploadPhotoUser(req, res, next){
         try {
             const result = await cloudinary.uploader.upload(req.file.path);
             const payload = await User.update({
                 photo: result.url,
             }, {
                 where: {
                     id: req.params.id,
                 },
             })
             response({ message: "upload photos user success", data: payload})(res, 200)
         } catch (err) {
             next(err);
         }
    }
   static async queueRead() {
        const someQueue = new Queue();
        const someOtherQueue = new Queue();

        setQueues([
            new BullAdapter(someQueue),
            new BullAdapter(someOtherQueue),
        ]);
    }
}

module.exports = userControl