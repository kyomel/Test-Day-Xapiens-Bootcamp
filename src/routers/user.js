const routers = require('express').Router();
const authenticate  = require('../middlewares/authenticate');
const userControl = require('../controllers/userController');

routers.post('/', userControl.register);
routers.post('/login', userControl.login);
routers.get('/auth/profile', authenticate, userControl.profile);
routers.get('/', userControl.getAll);
routers.get('/:id', userControl.getId);
routers.put('/:id', userControl.updateUser);
routers.delete('/:id', userControl.delUser);

module.exports = routers