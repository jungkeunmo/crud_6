import Book from "../models/Book";
import Author from "../models/Author";

export const homeController = async (req, res) => {

    const {
        query: { seq, searchValue },
    } = req;
    
    try{
        if(!seq && !searchValue) {
            const books = await Book.find().populate({
                path : `author`,
                model: Author,
            });
            res.render("screens/home", { books: books });
        } else {
            if(seq === "title") {
                const books = await Book.find({
                    title : { $regex : `.*${searchValue}.*` },
                }).populate({
                    path: `author`,
                    model: Author,
                });
                res.render("screens/home", { books: books });
            } else if (seq === "author") {
                const books = await Book.find().populate({
                    path : `author`,
                    model: Author,
                    match : {
                      name: { $regex: `.*${searchValue}.*` },
                    },
                });

                const nextBooks = books.filter((data) => data.author !== null);

                res.render("screens/home", { books: nextBooks });

            }
        }
        
    } catch (e) {
        console.log(e);
        res.render("screens/home", { books: [] });
    }
};