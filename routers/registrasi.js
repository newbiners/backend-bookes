const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const User = require('../api/models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


route.get('/',(req, res, next) => {
    res.json({
        message: "test"
    })
})

route.post('/', async (req, res, next) => {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const users = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        image: req.file.path,
        password: hashedPassword
    })   
    try {
      const result = await users.save();
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
})

module.exports = route;