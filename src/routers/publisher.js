const routers = require('express').Router();
const publisherController = require('../controllers/publisherController');
const { publisherValidationRules } = require('../middlewares/publisherValidator');
const { validateError } = require('../middlewares/validateError')

routers.get('/', publisherController.getPublisher);
routers.get('/:id', publisherController.getId);
routers.delete('/:id', publisherController.delPublisher);
routers.post('/', publisherValidationRules(), validateError, publisherController.createPublisher);
routers.post('/:id', publisherValidationRules(), validateError, publisherController.updatePublisher);

module.exports = routers;