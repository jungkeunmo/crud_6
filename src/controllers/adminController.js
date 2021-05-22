import Author from "../models/Author";
import Book from "../models/Book";

//author
export const authorViewController = async (req, res) => {
    try{
        const result = await Author.find().populate({
            path:  `books`,
            model: Book,
        });
        res.render("screens/authorView", { authorList: result });
    } catch(e) {
        console.log(e);
    }
}; 

export const authorDetailController = (req, res) => {
    res.render("screens/authorDetail")
} 

export const authorCreateController = (req, res) => {
    res.render("screens/authorCreate")
} 

//book
export const bookViewController = (req, res) => {
    res.render("screens/bookView")
} 

export const bookDetailController = (req, res) => {
    res.render("screens/bookDetail")
} 

export const bookCreateController = (req, res) => {
    res.render("screens/bookCreate")
} 

export const postAuthorCreateController = async (req, res) => {
    const {
        body: { authorName, authorBirth, authorBelong, authorGender },
    } = req;

    try {
        const result = await Author.create({
            name: authorName,
            birth: authorBirth,
            belong: authorBelong,
            gender: authorGender,
        });
        authorCreateController(req, res);
        
    } catch (e) {
        console.log(e)
        authorCreateController(req, res);
    }
};