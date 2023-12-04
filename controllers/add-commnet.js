const Comment = require('../api/models/comments');
const mongoose = require('mongoose');
const AddComment = async (req, res, next) => {
    console.log(" boook id ", req.user.userId)
    try {
        const data = new Date()
        console.log()
        const comments = new Comment({
        _id: new mongoose.Types.ObjectId(),
        book_id: req.body.book_id,
        user_id: req.user.userId,
        comment: req.body.comment,
        perent_id: req?.body?.perent_id,
        date: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        });

       
        await comments.save();
        res.status(200).json({
            data:{
                comments,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = AddComment;