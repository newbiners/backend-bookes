const mongoose = require('mongoose');
const BookDetail = require('../api/models/book-details');
const deleteUploadedFiles= require('./delete-file')
const AddBook = async (req, res, next) => {
    try {
        const data =await BookDetail.findOne({ book_id: req.body.book_id})
        if (data) {
            deleteUploadedFiles(req.files['pdf_file'][0].path)
            return res.status(400).json({
                message: 'infalid'
            })
        }
        const bookDetail = new BookDetail({
            _id: new mongoose.Types.ObjectId(),
            book_id: req.body.book_id,
            pdf_file: req.files['pdf_file'][0].path
        })

        const result = await bookDetail.save();
        res.status(200).json({
            message: 'sucsses'
        })
        // next();
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = AddBook;