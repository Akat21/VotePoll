import express from "express";
import "./loadEnvironment.mjs";
import { ObjectId } from "mongodb";
import { connectToDb, getDb } from "./db.mjs";
import cors from 'cors'

const PORT = process.env.PORT || 5050;
const app = express();
app.use(cors());
app.use(express.json())

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
      res.status(500).json({error: "Could not fetch document"})
    })
})

app.get('/polls/:id', (req, res)=>{
  if(ObjectId.isValid(req.params.id)){
    db.collection('polls').findOne({_id: new ObjectId(req.params.id)})
    .then(doc => {
       res.status(200).json(doc)
    })
    .catch(err => {
     res.status(500).json({error: "Could not fetch document"})
    })
  } else {
    res.status(500).json({error: "Not valid document Id"})
  }
})

app.post('/polls', (req, res)=>{
  const poll = req.body

  db.collection('polls').insertOne(poll)
   .then(result => {
    res.status(201).json(result)
   })
    .catch(err => {
      res.status(500).json({error: "Could not create a new document"})
    })
})

app.delete('/polls/:id', (req, res)=>{
  if(ObjectId.isValid(req.params.id)){
    db.collection('polls').deleteOne({_id: new ObjectId(req.params.id)})
    .then(result => {
       res.status(200).json(result)
    })
    .catch(err => {
     res.status(500).json({error: "Could not delete document"})
    })
  } else {
    res.status(500).json({error: "Not valid document Id"})
  }
})

app.patch('/polls/:id', (req, res) => {
  const updates = req.body

  if(ObjectId.isValid(req.params.id)){
    db.collection('polls').updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
    .then(result => {
       res.status(200).json(result)
    })
    .catch(err => {
     res.status(500).json({error: "Could not update document"})
    })
  } else {
    res.status(500).json({error: "Not valid document Id"})
  }
})