const router = require('express').Router();
const authorController = require('./src/controllers/authorController');
const publisherController = require('./src/controllers/publisherController');
const bookController = require('./src/controllers/bookController');

// author controller
router.get('/authors', authorController.getAuthor);
router.get('/authors/:id', authorController.getId);
router.delete('/authors/:id', authorController.delAuthor);
router.post('/authors', authorController.createAuthor);
router.post('/authors/:id', authorController.updateAuthor);

// book controller
router.get('/books', bookController.getBook);
router.get('/books/:id', bookController.getId);
router.delete('/books/:id', bookController.delBook);
router.post('/books', bookController.createBook);
router.post('/publishers/:id', bookController.updateBook);

// Random book
// router.get('/authors/:id/books', bookController.getBookAuthor);
router.get('/authors/:id/publishers', bookController.getAuthorPublisher);
router.get('/bookSorting', bookController.getBookSpesific);
router.get('/authors/:id/publishers', bookController.getAuthorPublisher);

// publisher controller
router.get('/publishers', publisherController.getPublisher);
router.get('/publishers/:id', publisherController.getId);
router.delete('/publishers/:id', publisherController.delPublisher);
router.post('/publishers', publisherController.createPublisher);
router.post('/publishers/:id', publisherController.updatePublisher);

module.exports = router;