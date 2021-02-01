const routers = require('express').Router();
const authorController = require('../controllers/authorController');

routers.get('/', authorController.getAuthor);
routers.get('/:id', authorController.getId);
routers.delete('/:id', authorController.delAuthor);
routers.post('/', authorController.createAuthor);
routers.post('/:id', authorController.updateAuthor);

module.exports = routers;



