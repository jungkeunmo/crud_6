import Book from "../models/Book";
import Author from "../models/Author";

export const homeController = async(req, res) => {
    try{
        const books = await Book.find().populate({
            path : `author`,
            model: Author,
        });

        res.render("screens/home", { books: books });
    } catch (e) {
        console.log(e)
        res.render("screens/home", { books: [] });
    }
};