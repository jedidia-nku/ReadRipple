const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware to parse JSON
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// POST route to add a new book
app.post('/api/books', upload.single('image'), async (req, res) => {
  const { name, author, description, genre, publishedDate } = req.body;
  const image = req.file.path;

  try {
    const newBook = new Book({ name, author, description, genre, publishedDate, image });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
