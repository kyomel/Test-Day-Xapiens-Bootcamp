require('dotenv').config();
const mailgun = require('mailgun-js');

module.exports = new mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
})