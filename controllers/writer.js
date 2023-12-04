const Writer = require('../api/models/writers');

const ViewWriter = async (req, res) => {
    const filter = req?.query.filter
    try {
        const data = await Writer.find();
        console.log(filter, "filter")
        const result = data.filter(item => item.writer_name.toLocaleLowerCase().includes(filter));
        if (result.length !== 0) {
            return res.status(200).json({
                data: result
            })
        }
        res.status(200).json({
            data: data
        })




    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = ViewWriter;