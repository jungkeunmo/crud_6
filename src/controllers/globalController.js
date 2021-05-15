import Book from "../models/Book";
import Author from "../models/Author";

export const homeController = async(req, res) => {

    const {
        query: { seq, searchValue },
    } = req;
    
    try{

        if(!seq && !searchValue) {
            const books = await Book.find().populate({
                path : `author`,
                model: Author,
            });
        } else {
            if(seq === "title") {
                const books = await Book.find({
                    title : {$regex : `.*${searchValue}.*`},
                }).populate({
                    path: `auhor`,
                    model: Author,
                });
                res.render("screens/home", { books: books });
            } else if (seq === "author") {
                const books = await Book.find().populate({
                    path : `author`,
                    model: Author,
                    match : {
                        name: { $regex: `.*${searchValue}.*`},
                    },
                });

                const nexBooks = books.filter((data) => data.author !== null);

                res.render("screens/home", { books: nexBooks });

            }
        }
        
    } catch (e) {
        console.log(e);
        res.render("screens/home", { books: [] });
    }
};