const mongoose = require('mongoose');

const loveCommentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    comment_id: String,
    user_id: String,
    perent_id: String
})

module.exports = mongoose.model('love-comments', loveCommentSchema);