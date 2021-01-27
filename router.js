const router = require('express').Router();
const control = require('./Controller/indexController');

router.get('/', control.index);
router.get('/datadiri', control.getDataDiri);
router.get('/datadiri/:nama/:kota', control.getDataLive);
router.post('/datadiri/insertUser', control.tambahDiri);
router.post('/datadiri/insertUserForm', control.tambahDiriForm);

module.exports = router;