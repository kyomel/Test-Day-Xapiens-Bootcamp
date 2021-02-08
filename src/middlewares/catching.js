const redis = require('redis');
const client = redis.createClient();

const caching = (req, res, next) => {
    try {
        client.get(req.originalUrl, (err, reply) => {
            if (reply) {
                res.send(reply)
            } else {
                next()
            }
        });
    } catch(err) {
        console.log
    }
}


module.exports = caching;