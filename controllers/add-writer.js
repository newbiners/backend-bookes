const Writter = require('../api/models/writers');
const mongoose = require('mongoose')
const AddWriter = async (req, res) => {
    try {
        const writter = new Writter({
            _id: new mongoose.Types.ObjectId(),
            writer_name: req.body.writer_name,
            description: req.body.description,
            image: req.files['image'][0].path,
        });

        await writter.save();
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}


module.exports = AddWriter;