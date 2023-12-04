const express = require('express');
const app = express();
const bodyParse = require('body-parser')
const multer = require('multer')
const path = require('path')
const secretKey = process.env.KEY_SACTET;
const jwt = require('jsonwebtoken')
const Users = require('./routers/users')
const Books = require('./routers/books')
const BookDetails = require('./routers/book-details')
const Comments = require('./routers/commets')
const Writers = require('./routers/writers');
const LoveBooks = require('./routers/love-books');
const LoveComments = require('./routers/love-comments');
const VisitBooks = require('./routers/visit-books');
const History = require('./routers/history');
const cors = require('cors')
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename:(req, file, cb) => {
        cb(null, new Date().getTime() + file.originalname)
    }
})

const filterFile = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

app.use('/images' ,express.static(path.join(__dirname, 'images')));
app.use(multer({fileFilter: filterFile, storage: fileStorage}).fields([{ name: 'image', maxCount: 1 }, { name: 'pdf_file', maxCount: 1 }]));

app.use(cors());

app.use('/book-details',BookDetails)
app.use('/users',Users)
app.use('/books',Books)
app.use('/writers', Writers)
app.use('/comments', Comments)

app.use((req, res, next) => {
    const token = req.headers['authorization'];
    // Jika token tidak ada, kirim respons 401 (Unauthorized)
    if (!token) {
      return res.sendStatus(401);
    }

    // Verifikasi token menggunakan secret key
    jwt.verify(token, secretKey, (err, user) => {
      // Jika token tidak valid, kirim respons 403 (Forbidden)
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
})

app.use('/history', History);
app.use('/love-books', LoveBooks);
app.use('/love-comments', LoveComments);
app.use('/visit-books', VisitBooks)

// error hendler
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            code: error.status
        }
    });
})

module.exports = app