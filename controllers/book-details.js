const BookDetail = require('../api/models/book-details');
const fs = require('fs');
const path = require('path');
const DetailView = async (req, res) => {
    try {
        // Find book details
        const file = await BookDetail.findOne({ book_id: req.params.book_id});
        // // Read file data
        const filePath = path.join(__dirname, `../${file.pdf_file}`);

        // // Read file data
        console.log(filePath, "file path")
        const dataBuffer = fs.readFileSync(filePath);

        const dataFile = dataBuffer.toString('base64');
        res.status(200).json({
           data: dataFile
        })
      
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = DetailView;
