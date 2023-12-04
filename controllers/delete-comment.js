const Comment = require('../api/models/comments');

const DeleteComment = async (req, res, next) => {
    console.log("test")
    try {
        const commentId = req.params.commentId;
        // console.log(commentId, "cek")
        const data =  await Comment.deleteOne({ _id: commentId});
        console.log(data)
        res.status(200).json({
            data: {
                message: "success"
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = DeleteComment;