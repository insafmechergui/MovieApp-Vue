import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from "dotenv";

const app = express();
dotenv.config()

// const PORT = process.env.SERVER_PORT || 5000;
const PORT =  5000;

app.get('/', (req, res) => {
  res.send('hello world');
});
app.listen(PORT, ()=>{ console.log(`server is listening on ${PORT}`)});