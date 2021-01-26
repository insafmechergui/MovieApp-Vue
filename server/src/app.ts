import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// dotenv.config();
// var uri = process.env.SERVER_PORT 
// mongoose.connect(uri, 
//   {  useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }  
// );
  const PORT = process.env.PORT || 5000;


// app.get('/', (req, res) => {
//   res.send('hello world');
// });
app.get('/status', (req, res) => {
  res.send({
    message:'hellohhhh'
  });
});
app.listen(PORT, ()=>{ console.log(`server is listening on ${PORT}`)});