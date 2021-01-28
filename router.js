const router = require('express').Router();
const authorController = require('./src/controllers/authorController');

// author controller
router.get('/authors', authorController.getAuthor);
router.get('/authors/:id', authorController.getId);
router.delete('/authors/:id', authorController.delAuthor);
router.post('/authors', authorController.createAuthor);
router.post('/authors/:id', authorController.updateAuthor);


module.exports = router;