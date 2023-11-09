// app.js

import dbConnect from './config/connectDB.js'
import  Express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = Express();
const port = process.env.PORT || 4000;

import cors from 'cors'
dbConnect();

app.use(cors({ origin: [process.env.HOST], credentials: true, }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
