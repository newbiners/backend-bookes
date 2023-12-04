const Book = require('../api/models/books');
const BookDetail = require('../api/models/book-details');
const deleteUploadedFiles = require('./delete-file')
const RemoveBook = async (req, res) => {
    try {
        const bookId = req.params.book_id;

        // Periksa apakah buku dengan ID yang diberikan ada
        console.log(bookId)
        const book = await Book.findOne({ _id: bookId });
        if (!book) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }
        
        // Hapus buku jika ditemukan
        await Book.deleteOne({ _id: bookId });
        await BookDetail.deleteOne({book_id: bookId})
        deleteUploadedFiles(book.image)
        res.status(200).json({
            message: "Buku berhasil dihapus",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = RemoveBook