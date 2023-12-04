const express = require('express');
const route = express.Router();
const ViewCommnet = require('../controllers/view-comment')
const AddComment = require('../controllers/add-commnet')
const DeleteComment = require('../controllers/delete-comment');
const CekToken = require('../controllers/cek-user')

route.post('/', CekToken,AddComment)
route.get('/:book_id', ViewCommnet)
route.delete('/', CekToken,DeleteComment);
module.exports = route;