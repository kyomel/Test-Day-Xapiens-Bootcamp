'use strict'

const bcrypt = require('bcrypt');
const Queue = require('bull');
const QueueMQ = require('bullmq');
const { setQueues, BullMQadapter, BullAdapter } = require('bull-board');

const { User } = require('../db/models');
const sendMail = require('../lib/welcomeEmail');
const sendMailUser = require('../lib/emailUser');
const response = require('../helper/response');
const token = require('../helper/token');
const mailgun = require('../lib/mailgun');

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
            sendMail(payload.email);
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
            let instance = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(!instance) {
                throw new Error(`Email ${req.body.email} doesn't exist!`)
            }
            const isPassword = await bcrypt.compareSync(req.body.password, instance.password)
            if(!isPassword) {
                throw new Error(`Wrong password!`)
            }
            sendMailUser(instance.email);
            return response({ message: "Login success", data: token(instance)})(res, 200)
        } catch (err){
            res.status(403);
            next(err);
        }
    }

    static async profile(req, res) {
        res.status(200);
        return res.json(req.user.entity);
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