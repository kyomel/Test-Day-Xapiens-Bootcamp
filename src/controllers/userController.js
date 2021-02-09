'use strict'

const bcrypt = require('bcrypt');
const Queue = require('bull');
const QueueMQ = require('bullmq');
const { setQueues, BullMQadapter, BullAdapter } = require('bull-board');

const { User } = require('../db/models');
const sendMail = require('../lib/welcomeEmail');
const sendMailUser = require('../lib/emailUser');
const path = require('path');
// const cloudinary = require('../middlewares/cloudinary');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const response = require('../helper/response');
const token = require('../helper/token');

// const mailgun = require('../lib/mailgun');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

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
            let path = "public/upload/users/";
            let fileName = req.file.filename;
            let resultPathFileName = path + fileName;      
            cloudinary.uploader
              .upload(resultPathFileName)
              .then(async (result) => {
                console.log("res",result)
                const datas = await User.update(
                  {
                    photo: result.url,
                  },
                  { where: { id: req.params.id } }
                );
              });
          } catch (error) {
            res.status(400);
            next(error);
          }
          return response({ message: "photo upload success"})(res, 200);
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