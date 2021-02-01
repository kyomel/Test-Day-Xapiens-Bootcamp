const routers = require('express').Router();
const bookController = require('../controllers/bookController');

routers.get('/', bookController.getBook);
routers.get('/:id', bookController.getId);
routers.delete('/:id', bookController.delBook);
routers.post('/', bookController.createBook);
routers.post('/:id', bookController.updateBook);

module.exports = routers;
