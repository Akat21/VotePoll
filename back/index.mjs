import express from "express";
import "./loadEnvironment.mjs";
import { connectToDb, getDb } from "./db.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

//db connection
let db
connectToDb((err)=>{
  if (!err){
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
    db = getDb()
  }
})

// Routes
app.get('/polls', (req, res)=>{
  let books = []
  db.collection('polls').find().sort({question: 1}).forEach(book => books.push(book))
    .then(()=>{
      res.status(200).json(books)
    })
    .catch(()=>{
      res.status(500).json({err: "Could not fetch document"})
    })
})

