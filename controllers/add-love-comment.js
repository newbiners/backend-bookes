const LoveComment = require('../api/models/love-comments');
const mongoose = require('mongoose');
const secretKey = process.env.KEY_SACTET;
const jwt = require('jsonwebtoken');
const AddLoveComment = async (req, res, next) => {
    console.log(req.user.userId, "header")
    try {
        const addLoveComment = new LoveComment({
            _id: new mongoose.Types.ObjectId(),
            comment_id: req.body.comment_id,
            user_id: req.user.userId,
            perent_id: req.body.perent_id
        })

        await addLoveComment.save()
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = AddLoveComment;