const routers = require('express').Router();
const bookController = require('../controllers/bookController');
const multer = require('multer');
const storageBook = require('../middlewares/uploadCover');
const imageFilter = require('../helper/imageFilter');
const { validator } = require('../middlewares/validator');
const { validateError } = require('../middlewares/validateError')

const maxSize = 1 * 800 * 800;

routers.get('/', bookController.getBook);
routers.get('/:id', bookController.getId);
routers.delete('/:id', bookController.delBook);
routers.post('/', validator.bookValidationRules(), validateError, bookController.createBook);
routers.post('/:id', validator.bookValidationRules(), validateError, bookController.updateBook);

routers.put('/uploadCover/:id', multer({ storage: storageBook, fileFilter: imageFilter, limits: { fileSize: maxSize }}).single('cover_book'), bookController.uploadCover);

module.exports = routers;
