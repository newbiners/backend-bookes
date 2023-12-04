const express = require('express');
const route = express.Router();
const LoveBook = require('../api/models/love-books')
const AddLoveBooks = require('../controllers/add-love-books');
const ViewLoveBook = require('../controllers/view-love-books');
const RemoveLoveBook = require('../controllers/remove-love-book');
route.get('/:book_id', ViewLoveBook);
route.post('/', AddLoveBooks);
route.delete('/:book_id', RemoveLoveBook)
module.exports = route;