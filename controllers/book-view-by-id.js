const Book = require('../api/models/books');
const Writer = require('../api/models/writers');
// const LoveBook = require('../api/models/love-books');
const VisitBook = require('../api/models/visit-books');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const secretKey = process.env.KEY_SACTET;
const BookViewById = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id, "id")
        const data = await Book.findOneAndUpdate({ _id: id }, { $inc: { amount_user: 1 } },
            { new: true })
        if (!data) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        const writer = await Writer.findOne({ _id: data.writer_id })
        res.status(200).json({
            data: {
                _id: data._id,
                name_book: data.name_book,
                sinopsis: data.sinopsis,
                image: data.image,
                writer_name: writer.writer_name
            }
        })
        const token = req.headers['authorization'];
        if (token) {

            jwt.verify(token, secretKey, async(error, user) => {
                const dataBook = await VisitBook.findOne({user_id : user.userId, book_id : id})
                if(!dataBook){
                    console.log(dataBook, " booksese")
                    const visitBook = new VisitBook({
                        _id : new mongoose.Types.ObjectId(),
                        book_id: id,
                        user_id: user.userId
                    })
                    await visitBook.save()
                }

            })
        }

    } catch (error) {
        res.status(500).json({
            message: message.error
        })
    }
}

module.exports = BookViewById;