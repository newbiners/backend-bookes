const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name_book: String,
    sinopsis: String,
    image: String,
    writer_id: String,
    amount_love: {
        type: Number,
        default: 0
    },
    amount_user: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('books', bookSchema);