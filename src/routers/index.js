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

module.exports = routers;