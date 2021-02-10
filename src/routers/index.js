const author = require('./author');
const book = require('./book');
const publisher = require('./publisher');
const user = require('./user');
const checkongkir = require('./checkongkir');
const routers = require('express').Router();

routers.use('/authors', author);
routers.use('/books', book);
routers.use('/publishers', publisher);
routers.use('/checkongkir', checkongkir);
routers.use('/users', user);

routers.use('/', (req, res) => {
    res.json({
        "success": true,
        "message": "welcome to ...!",
        "data": {
            "documentation": "https://documenter.getpostman.com/view/10995686/TW77h41n",
            "login": "https://xapiens-bootcamp.herokuapp.com/api/v1/login",
            "register": "http://localhost:3000/api/v1/users"
        }
    })
})

module.exports = routers;