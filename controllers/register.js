const mongoose = require('mongoose');
const User = require('../api/models/users');
const bcrypt = require('bcrypt');
const Register = async (req, res, next) => {
    console.log(req.body.name, req.body.email, req.body.password)
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await User.findOne({ email: req.body.email });
    console.log(data, "data")
    if (data) {
        return res.status(400).json({
            message: "email sudah ada"
        });
    }
    const users = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        image: req.files?.['image']?.[0]?.path,
        password: hashedPassword
    })
    try {
        const result = await users.save();
        console.log(result, "result")
        res.status(200).json({
            data: {
                name: result.name,
                email: result.email,
                image: result.image
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = Register