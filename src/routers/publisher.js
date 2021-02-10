const routers = require('express').Router();
// const caching = require('../middlewares/catching');
const authenticate = require('../middlewares/authenticate');
const ownership = require('../middlewares/checkOwnership');
const publisherController = require('../controllers/publisherController');
const { validator } = require('../middlewares/validator');
const { validateError } = require('../middlewares/validateError')

routers.get('/', authenticate ,publisherController.getPublisher);
routers.get('/:id', authenticate, publisherController.getId);
routers.delete('/:id', authenticate, ownership, publisherController.delPublisher);
routers.post('/',  authenticate, ownership, validator.publisherValidationRules(), validateError, publisherController.createPublisher);
routers.post('/:id', authenticate, ownership, validator.publisherValidationRules(), validateError, publisherController.updatePublisher);

module.exports = routers;