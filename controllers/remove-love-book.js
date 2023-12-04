const LoveBook = require('../api/models/love-books');

const RemoveLoveBook = async(req, res) => {
    console.log(req.params.book_id, "data params", req.user.userId)
    try{
        const data = await LoveBook.findOne({book_id: req.params.book_id, user_id: req.user.userId})
        if(!data){
            return res.status(404).json({
                message : 'data not defind'
            })
        }

        await LoveBook.deleteOne({book_id: req.params.book_id, user_id: req.user.userId});
        res.status(200).json({
            message : 'success'
        })
    }catch(err){
        res.status(200).json({
            message: err.message
        })
    }
}

module.exports = RemoveLoveBook;