const author = require('./author');
const book = require('./book');
const publisher = require('./publisher');
const checkongkir = require('./checkongkir');
const routers = require('express').Router();

routers.use('/authors', author);
routers.use('/books', book);
routers.use('/publishers', publisher);
routers.use('/checkongkir', checkongkir);

module.exports = routers;