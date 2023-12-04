require('dotenv').config();
const http = require("http");
const app = require('./app');
const cors = require('cors')
const mongoose = require('mongoose');
const uri = "mongodb+srv://gufronnewbiners:learnmongodbbosq@cluster0.dfppiak.mongodb.net/?retryWrites=true&w=majority";


const connect = async () => {
  try {
   const data = await mongoose.connect(uri)
   if(!data) {
    return 
   }
    console.log('sucess')
  } catch (err) {
    console.log(err)
  }
}

connect()

// app.use(cors());
const port = process.env.PORT || 3000;

const service = http.createServer(app);
service.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
