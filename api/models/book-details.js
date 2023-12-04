const mongoose = require('mongoose');

const bookDetailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    book_id: String,
    pdf_file: String
})

module.exports = mongoose.model('book-details', bookDetailSchema);