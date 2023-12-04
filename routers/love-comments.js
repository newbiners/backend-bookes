const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const LoveComment = require('../api/models/love-comments');
const AddLoveComment = require('../controllers/add-love-comment');

route.get('/', async (req, res, next) => {
    try {
        const loveComment = await LoveComment.find();
        res.status(200).json({
            data: loveComment,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
})

route.post('/', AddLoveComment);



module.exports = route;