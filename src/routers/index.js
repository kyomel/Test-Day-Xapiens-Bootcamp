const author = require('./author');
const book = require('./book');
const publisher = require('./publisher');
const routers = require('express').Router();

routers.use('/authors', author);
routers.use('/books', book);
routers.use('/publishers', publisher);

module.exports = routers;