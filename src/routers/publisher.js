const routers = require('express').Router();
const publisherController = require('../controllers/publisherController');
const { validator } = require('../middlewares/validator');
const { validateError } = require('../middlewares/validateError')

routers.get('/', publisherController.getPublisher);
routers.get('/:id', publisherController.getId);
routers.delete('/:id', publisherController.delPublisher);
routers.post('/', validator.publisherValidationRules(), validateError, publisherController.createPublisher);
routers.post('/:id', validator.publisherValidationRules(), validateError, publisherController.updatePublisher);

module.exports = routers;