const User = require('../api/models/users');

const DataUser = async (req, res) => {
    try {
        const data = await User.findOne({ _id: req.user.userId });

        res.status(200).json({
            data: {
                name: data.name,
                email: data.email,
                image: data.image
            }
        })
    } catch (err) {
        res.status(200).json({
            message: err.message
        })
    }
}

module.exports = DataUser;