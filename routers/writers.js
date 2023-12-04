const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const Writer = require('../api/models/writers');
const AddWriter = require('../controllers/add-writer');
const ViewWriter = require('../controllers/writer')
const WriterById = require('../controllers/writer-id')
route.get('/', ViewWriter)
route.get('/:id', WriterById)
route.post('/', AddWriter)

module.exports = route;