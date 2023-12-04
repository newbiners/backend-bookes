const mongoose = require('mongoose');

const visitBookSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    book_id: String,
    user_id: String
})

module.exports = mongoose.model('visit-books', visitBookSchema);