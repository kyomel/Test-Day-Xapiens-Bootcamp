const routers = require('express').Router();
const publisherController = require('../controllers/publisherController');

routers.get('/publishers', publisherController.getPublisher);
routers.get('/publishers/:id', publisherController.getId);
routers.delete('/publishers/:id', publisherController.delPublisher);
routers.post('/publishers', publisherController.createPublisher);
routers.post('/publishers/:id', publisherController.updatePublisher);

module.exports = routers;