const Comment = require('../api/models/comments');
const LoveComment = require('../api/models/love-comments');
const User = require('../api/models/users');
const ViewComment = async (req, res, next) => {
    try {
        let data = [];
        const comments = await Comment.find();
        for (let i = 0; i < comments.length; i++) {
            const object_id = comments[i]._id;
            const id = object_id.toString();

            const commentObj = await LoveComment.findOne({ comment_id: id});
            
            const status = commentObj !== null && comments[i].user_id === req.user.userId;
            if(comments[i].book_id == req.params.book_id) {
                const dataName = await User.findOne({_id: comments[i].user_id});
                data.push({
                        _id: comments[i]._id,
                        book_id: comments[i].book_id,
                        comment: comments[i].comment,
                        parent_id: comments[i].perent_id,
                        user_name: dataName.name,
                        liked: status,
                        date: comments[i].date
                });
            }
        }
        data.reverse()
        res.status(200).json({
            data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = ViewComment;
