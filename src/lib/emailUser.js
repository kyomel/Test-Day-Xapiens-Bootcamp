'use strict'

require('dotenv').config();
const nodemailer = require('nodemailer');
const Queue = require('bull');
const { setQueues, BullMQAdapter, BullAdapter } = require('bull-board');

let { User } = require('../db/models');

const sendMailQueue = new Queue('sendMailUser');
setQueues([new BullAdapter(sendMailQueue)]);

let transMailer = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});

let infoUser = (email) => {
    sendMailQueue.add({ mail: email });
    return {
        from: 'Kyomel <info@jogjacreative.id>',
        to: `${email}`,
        subject: `Siap-siap ada ledakan buku murah!`,
        text: `Bazaar buku sekarang dibuka!`
    };      
};

sendMailQueue.process(async function (job, done) {
    try {
        const payload = await User.findAll({
            where: {
                role: 'user',
            },
        });
        let emailResult = payload.map((data) => data.email);
        let emailResults = emailResult.join();

        await transMailer.sendMail(infoUser(emailResults));
        done();
    } catch (error) {
        console.log(error);
    }
});

module.exports = infoUser;