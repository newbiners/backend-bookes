const express = require('express')
const route = express.Router()
const History = require('../controllers/history');


route.get('/', History);

module.exports = route