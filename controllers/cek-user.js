const secretKey = process.env.KEY_SACTET;
const jwt = require('jsonwebtoken');
const CekUser = (req, res, next) => {
    const token = req.headers['authorization'];
    // Jika token tidak ada, kirim respons 401 (Unauthorized)
    if (!token) {
      return res.sendStatus(401);
    }

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
}


module.exports = CekUser;