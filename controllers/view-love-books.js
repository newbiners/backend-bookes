const LoveBook = require('../api/models/love-books');

const ViewLoveBook = async(req, res) => {
    console.log(req.params.book_id," cek " ,req.user.userId)
    try{
        if(!req.user.userId) {
            res.status(404).json({
                message: "forbiden"
            })
        }
        const data = await LoveBook.findOne({
            user_id: req.user.userId, book_id : req.params.book_id
        })


        if(!data) {
            res.status(200).json({
                data: false
            })
        }else {
            res.status(200).json({
                data: true
            })
        }
    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}


module.exports = ViewLoveBook;