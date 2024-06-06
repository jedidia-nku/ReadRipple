import {Schema, model} from "mongoose";

const BookSchema = new Schema({
    name: String,
    author: String,
    price: Number,
    category: String,
    image: String,
    title: String,
    pdf: String,
});

export default model('books', BookSchema);