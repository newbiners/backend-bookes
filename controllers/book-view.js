const mongoose = require('mongoose');
const Book = require('../api/models/books');
const Writer = require('../api/models/writers');
// const writers = require('../api/models/writers');
const BookView = async (req, res) => {
    const searchItem = req.query.book_name
    const searchItemById = req.query.writer_id
    try {
        const dataArrays = []
        const data = await Book.find();
        for (let i = 0; i < data.length; i++) {
            const writer = await Writer.findOne({ _id: data[i].writer_id })
            if (!searchItemById) {
                dataArrays.push({
                    _id: data[i]._id,
                    name_book: data[i].name_book,
                    sinopsis: data[i].sinopsis,
                    image: data[i].image,
                    amount_love: data[i].amount_love,
                    amount_user: data[i].amount_user,
                    writer_name: writer.writer_name
                })
            } else {
                if (data[i].writer_id == searchItemById) {
                    dataArrays.push({
                        _id: data[i]._id,
                        name_book: data[i].name_book,
                        sinopsis: data[i].sinopsis,
                        image: data[i].image,
                        amount_love: data[i].amount_love,
                        amount_user: data[i].amount_user,
                        writer_name: writer.writer_name
                    })
                }
            }
        }
        const result = dataArrays.filter(item => item.name_book.includes(searchItem));

        if (result.length === 0) {
            return res.status(200).json({
                data: {
                    books: dataArrays
                }
            });
        }

        res.status(200).json({
            data: {
                books: result
            }
        });






    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = BookView;
