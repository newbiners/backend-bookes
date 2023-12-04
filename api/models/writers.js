const mongoose = require('mongoose');

const writerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    writer_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: String,
    amount_love: {
        type: Number,
        default: 0
    },
    amount_user: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('Writers', writerSchema); 
