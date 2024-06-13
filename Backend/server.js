import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import express from 'express';
import multer from 'multer';
import path from 'path';
import Book from './model/Book.js';
import mongoose, { model } from "mongoose";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware to parse JSON
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  next();
})

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

app.get('/', async (_, response) => {
  response.json({ running: true })



})

const upload = multer({ storage });

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


const saveBookAssets = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "pdf", maxCount: 1 }
]);


// POST route to add a new book
app.post('/api/books', saveBookAssets, async (req, res) => {
 
  const image = (req.files.image ?? [])[0];
  const pdf = (req.files.pdf ??  [])[0];
 
  if(!pdf || !image){
    return res.status(400).json({message: 'book asset is missing'});
  }

  try {
    const data = { ...req.body, image: image.path, pdf: pdf.path };

    const newBook = new Book(data);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve uploaded images
app.use('/uploads', express.static(path.join(path.dirname('.'), 'uploads')));

app.listen(PORT, async () => {
  try {
    console.log("--------------------------------------");
    console.log(URI);
    console.log("--------------------------------------");
    await mongoose.connect(URI)
    console.log(`Server running on port ${PORT}`)
  } catch (error) {
    console.log("Failed to connect to MongoDB. Check if the server is up");
  }

});

