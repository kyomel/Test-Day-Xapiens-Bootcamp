const routers = require('express').Router();
const authenticate  = require('../middlewares/authenticate');
const ownership = require('../middlewares/checkOwnership');
const userControl = require('../controllers/userController');

routers.post('/', userControl.register);
routers.post('/login', userControl.login);
routers.get('/auth/profile', authenticate, userControl.profile);
routers.get('/', authenticate,  userControl.getAll);
routers.get('/:id', authenticate, userControl.getId);
routers.put('/:id', authenticate, userControl.updateUser);
routers.delete('/:id', authenticate, ownership, userControl.delUser);

module.exports = routers