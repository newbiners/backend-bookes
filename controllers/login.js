const User = require('../api/models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.KEY_SACTET;
const Login = async(req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
  
    try{
        const user = await User.findOne({email: email})
        console.log(user, "user")
        if(!user){
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordCompair = await bcrypt.compare(password, user.password);
        if(!passwordCompair){
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({userId: user._id},secretKey,{ expiresIn: '1h' })
        res.status(200).json({
            data: {
                token
            }
        })
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
    
}

module.exports = Login;