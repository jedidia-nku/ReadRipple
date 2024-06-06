import Book from "../model/Book.js";

export const getBook = async(req, res) => {
    const limit = req.query.limit ? Number(req.query.limit) : undefined;
    try {
        if(limit !== undefined && isNaN(limit)) throw new Error("invalid limit");
        
        const book = limit ?  await Book.find().limit(limit) : await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
