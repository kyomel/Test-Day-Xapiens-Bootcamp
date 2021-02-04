const routers = require('express').Router();
const authorController = require('../controllers/authorController');
const multer = require('multer');
const storageAuthor = require('../middlewares/uploadPhoto');
const imageFilter = require('../helper/imageFilter');
const { validator } = require('../middlewares/validator');
const { validateError } = require('../middlewares/validateError');

const maxSize = 1 * 800 * 800;

routers.get('/', authorController.getAuthor);
routers.get('/:id', authorController.getId);
routers.delete('/:id', authorController.delAuthor);
routers.post('/', validator.authorValidationRules(), validateError ,authorController.createAuthor);
routers.post('/:id', validator.authorValidationRules(), validateError ,authorController.updateAuthor);

routers.put('/uploadPhoto/:id', multer({ storage: storageAuthor, fileFilter: imageFilter, limits: { fileSize: maxSize }}).single('photo'), authorController.uploadPhoto);

module.exports = routers;



