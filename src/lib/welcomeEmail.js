'use strict'

require('dotenv').config();
const nodemailer = require('nodemailer');
const Queue = require('bull');
const { setQueues, BullAdapter } = require('bull-board');

const sendMailQueue = new Queue('sendMail');
setQueues([new BullAdapter(sendMailQueue)]);
let transMailer = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});
let info = (email) => {
    sendMailQueue.add({ mail: email });
    return {
        from: 'Kyomel <info@jogjacreative.id>',
        to: `${email}`,
        subject: `Welcome ${email}`,
        text: `Welcome to the club!!!`
    };      
};

sendMailQueue.process(async function (job, done) {
    await transMailer.sendMail(info(job.data.mail));
    done();
});

module.exports = info;