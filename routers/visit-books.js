const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const VisitBook = require('../api/models/visit-books');


route.get('/', async (req, res, next) => {
    try {
        const visitBooks = await VisitBook.find();
        res.status(200).json({
            data: visitBooks,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
})

module.exports = route;