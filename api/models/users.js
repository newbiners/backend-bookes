const mongoose = require('mongoose');

const userScema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    email: String,
    image: String
})


module.exports = mongoose.model('users', userScema);