const Book = require('../api/models/books');
const mongoose = require('mongoose');

const AddBook = async(req, res) => {
    console.log(req.body.writer_id)
    try{
        const book = new Book({
            _id: new mongoose.Types.ObjectId(),
            name_book: req.body.name_book,
            sinopsis: req.body.sinopsis,
            image: req.files['image'][0].path,
            writer_id: req.body.writer_id,
            amount_love: 0,
            amount_user: 0
        })

         await book.save();
        res.status(200).json({
            message: "sucsses"
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = AddBook