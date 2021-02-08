const routers = require('express').Router();
const caching = require('../middlewares/catching');
const authenticate = require('../middlewares/authenticate');
const ownership = require('../middlewares/checkOwnership');
const authorController = require('../controllers/authorController');
const multer = require('multer');
const storageAuthor = require('../middlewares/uploadPhoto');
const imageFilter = require('../helper/imageFilter');
const { validator } = require('../middlewares/validator');
const { validateError } = require('../middlewares/validateError');

const maxSize = 1 * 800 * 800;

routers.get('/', authenticate, ownership, caching, authorController.getAuthor);
routers.get('/:id', authenticate, authorController.getId);
routers.delete('/:id', authenticate, ownership, authorController.delAuthor);
routers.post('/', authenticate, ownership, validator.authorValidationRules(), validateError ,authorController.createAuthor);
routers.post('/:id', authenticate, ownership, validator.authorValidationRules(), validateError ,authorController.updateAuthor);

routers.put('/uploadPhoto/:id', multer({ storage: storageAuthor, fileFilter: imageFilter, limits: { fileSize: maxSize }}).single('photo'), authorController.uploadPhoto);

module.exports = routers; 



