'use strict'

const { User } = require('../db/models');
const response = require('../helper/response');
const token = require('../helper/token');
const bcrypt = require('bcrypt');

class userControl {
    static async register(req, res, next) {
        let {
            firstName,
            lastName,
            email,
            password
        } = req.body
        try {
            const payload = await User.create({
                firstName,
                lastName,
                email,
                password
            })
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
            return response({ message: "Login success", data: token(instance)})(res, 200)
        } catch (err){
            res.status(403);
            next(err);
        }
    }

    static async profile(req, res, next) {
        try {
            const payload = await User.findByPk({
                attributes: ['id','firstName','lastName','email'],
            }, {
                where: {
                    id: req.params.id
                }
            })
            const result = {
                id_user: payload.id,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email
            }
            return response({ message: "Profile show", data: result})(res, 200)
        } catch (err) {
            res.status(422);
            next(err);
        }
    }
}

module.exports = userControl