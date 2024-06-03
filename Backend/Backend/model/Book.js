const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Book', BookSchema);