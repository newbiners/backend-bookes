const Writer = require('../api/models/writers');

const WriterById = async(req, res) => {
    try{
        const data = await Writer.findOne({_id: req.params.id})
      
        res.status(200).json({
            data
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = WriterById;