'use strict'

require('dotenv').config();
const nodemailer = require('nodemailer');
const Queue = require('bull');
const { setQueues, BullAdapter } = require('bull-board');

let { User } = require('../db/models');

const sendMailWelcomeQueue = new Queue('sendMailWelcome');
const sendMailJobQueue = new Queue('sendMailJob');
setQueues([
    new BullAdapter(sendMailWelcomeQueue),
    new BullAdapter(sendMailJobQueue),
]);

class serviceQueueMail {
    static transMailer = () => {
        nodemailer.createTransport({
            host: process.env.NODEMAILER_HOST,
            port: process.env.NODEMAILER_PORT,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS,
            },
        });
    };

    static welcomeEmail = (email) => {
        sendMailWelcomeQueue.add({ mail: email });
        return {
            from: 'Kyomel <info@jogjacreative.id>',
            to: `${email}`,
            subject: `Welcome ${email}`,
            text: `Welcome to the club!!!`
        };      
    };

    static jobEmail = (email) => {
        sendMailJobQueue.add({ datas: email });
        return {
            from: 'Kyomel <info@jogjacreative.id>',
            to: `${email}`,
            subject: `Siap-siap ada ledakan buku murah!`,
            text: `Bazaar buku sekarang dibuka!`
        };
    };

    static sendMailWelcomeQueue = () => {
        sendMailWelcomeQueue.process(async function (job, done) {
            try {
                await transMailer.sendMail(welcomeEmail(job.data.mail));
                done();
            } catch (err) {
                console.log(err);
                done();
            }
        })
    }

    static sendMailJobQueue = () => {
        sendMailJobQueue.process(async function (done) {
            try {
                const datas = await User.findAll({
                    where: {
                        role: 'user',
                    },
                });
                let emailResult = payload.map((data) => data.email);
                let emailResults = emailResult.join();
                await transMailer.sendMail(jobEmail(emailResults));
                done();
            } catch (err) {
                console.log(err);
                done();
            }
        });
    };
}


module.exports = serviceQueueMail;