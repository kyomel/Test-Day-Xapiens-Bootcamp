const routers = require('express').Router();
const userControl = require('../controllers/userController');
const passport = require('passport');
require('../middlewares/passport-jwt');

routers.post('/', userControl.register);
routers.get('/', userControl.getAll);
routers.get('/:id', userControl.getId);
routers.put('/:id', userControl.updateUser);
routers.delete('/:id', userControl.delUser);
routers.post('/login', userControl.login);
routers.get('/profile', passport.authenticate('jwt', { session: false }), userControl.profile);

module.exports = routers