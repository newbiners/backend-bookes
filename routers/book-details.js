const express = require('express');
const route = express.Router();
const ViewBook = require('../controllers/book-details');
const AddBook = require('../controllers/add-book-details');
// const jwt = require('jsonwebtoken')
// const secretKey = process.env.KEY_SACTET;
const CekUser = require('../controllers/cek-user');
route.get('/:book_id',ViewBook);

// route.post('/', CekUser, AddBook);
route.post('/', AddBook);
module.exports = route;