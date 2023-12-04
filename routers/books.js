const express = require('express');
const route = express.Router();
const BookView = require('../controllers/book-view');
const AddBook = require('../controllers/add-books')
const CekUser = require('../controllers/cek-user');
const RemoveBook = require('../controllers/remove-book');
const BookViewById = require('../controllers/book-view-by-id')
route.get('/',BookView);
route.get('/:id',BookViewById)
// route.post('/add', CekUser,AddBook);
route.post('/add',AddBook);
route.delete('/delete/:book_id', RemoveBook)
module.exports = route;