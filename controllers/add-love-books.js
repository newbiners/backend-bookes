const LoveBook = require('../api/models/love-books');
const Book = require('../api/models/books');
const Writer = require('../api/models/writers');
const mongoose = require('mongoose');

const AddLoveBooks = async (req, res) => {
    try {
        if (!req.user.userId) {
            return res.status(404).json({
                message: "Not logged in"
            });
        }

        const { book_id } = req.body;

        if (!book_id) {
            return res.status(400).json({
                message: "Book ID is required"
            });
        }

        const loveBook = new LoveBook({
            _id: new mongoose.Types.ObjectId(),
            book_id: book_id,
            user_id: req.user.userId
        });

        const book = await Book.findOneAndUpdate(
            { _id: book_id },
            { $inc: { amount_love: 1 } }, // Increment by 1 for each love
            { new: true }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }


        const writer =  await Writer.findOneAndUpdate(
            { _id: book.writer_id },
            { $inc: { amount_love: 1 } }, // Increment by 1 for each love
            { new: true }
        );

        if (!writer) {
            return res.status(404).json({
                message: "Writer not found"
            });
        }


        await loveBook.save();

        res.status(200).json({
            message: "Success"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = AddLoveBooks;
