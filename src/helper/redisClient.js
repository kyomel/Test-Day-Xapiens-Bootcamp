const redis = require('redis');

const client = redis.createClient();

client.on("error", function (error) {
    console.log(error);
})

client.set("key", "value", redis.print);
client.get("key", redis.print);

const setCache = (req, payload) => {
    try {
        client.get(req.originalUrl, (err, reply) => {
            if(reply) {
                throw new Error("double key")
            } else {
                client.setex(req.originalUrl, 3000, JSON.stringify(payload));
            }
        })
    } catch(err) {
        console.log(err);
    }
   
}

module.exports = setCache