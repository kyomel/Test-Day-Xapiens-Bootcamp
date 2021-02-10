const routers = require('express').Router();
const caching = require('../middlewares/catching');
const authenticate = require('../middlewares/authenticate');
const ownership = require('../middlewares/checkOwnership');
const bookController = require('../controllers/bookController');
const multer = require('multer');
const storageBook = require('../middlewares/uploadCover');
const imageFilter = require('../helper/imageFilter');
const { validator } = require('../middlewares/validator');
const { validateError } = require('../middlewares/validateError')

const maxSize = 1 * 800 * 800;

routers.get('/', authenticate, caching, bookController.getBook);
routers.get('/:id', authenticate,  bookController.getId);
routers.delete('/:id', authenticate, ownership, bookController.delBook);
routers.post('/', authenticate, ownership, validator.bookValidationRules(), validateError, bookController.createBook);
routers.post('/:id', authenticate, ownership, validator.bookValidationRules(), validateError, bookController.updateBook);

routers.put('/uploadCover/:id', authenticate, multer({ storage: storageBook, fileFilter: imageFilter, limits: { fileSize: maxSize }}).single('cover_book'), bookController.uploadCover);

module.exports = routers;
