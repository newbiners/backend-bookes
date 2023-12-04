const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    book_id: String,
    user_id: String,
    perent_id: String,
    comment: String,
    date: String
})

module.exports = mongoose.model('comments', commentSchema);