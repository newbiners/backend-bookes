const ViewBook = require('../api/models/visit-books');
const Book = require('../api/models/books');
const Writer = require('../api/models/writers');
const History = async(req, res) => {
    try{
        const dataArrays = []
        const data = await ViewBook.find()
        console.log(data)
        for(let i = 0; i < data.length; i++){
            if(data[i].user_id == req.user.userId){
                console.log(data[i].book_id, "cek book id")
                const dataBook = await Book.findOne({_id: data[i].book_id});
                const writer = await Writer.findOne({_id : dataBook.writer_id});
                dataArrays.push({
                    _id: dataBook._id,
                    name_book: dataBook.name_book,
                    sinopsis: dataBook.sinopsis,
                    image: dataBook.image,
                    amount_love: dataBook.amount_love,
                    amount_user: dataBook.amount_user,
                    writer_name: writer.writer_name
                })
            }
        }
        res.status(200).json({
          data: dataArrays
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = History;