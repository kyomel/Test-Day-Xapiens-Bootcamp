const routers = require('express').Router();
const authenticate  = require('../middlewares/authenticate');
const ownership = require('../middlewares/checkOwnership');
const userControl = require('../controllers/userController');
const multer = require('../middlewares/multerUser');

routers.post('/', userControl.register);
routers.post('/login', userControl.login);
routers.get('/auth/profile', authenticate, userControl.profile);
routers.get('/', userControl.getAll);
routers.get('/:id', userControl.getId);
routers.put('/:id', authenticate, userControl.updateUser);
routers.delete('/:id', authenticate, ownership, userControl.delUser);

routers.put('/upload/photos/:id', multer.single('image'), userControl.uploadPhotoUser);

module.exports = routers