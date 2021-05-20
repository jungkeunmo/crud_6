import Book from "../models/Book";
import Author from "../models/Author";

export const authorViewController = (req, res) => {
    res.render("screens/authorView")
} 

export const authorDetailController = (req, res) => {
    res.render("screens/authorDetail")
} 

export const authorCreateController = (req, res) => {
    res.render("screens/authorCreate")
} 

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
        body: { authorBelong, authorBirth, authorName, authorGender },
    } = req;

    try {
        const result = await Author.create({
            name: authorName,
            birth: authorBirth,
            gender: authorGender,
            belong: authorBelong,
        });
        authorCreateController(req, res);
        
    } catch (e) {
        console.log(e)
        authorCreateController(req, res);
    }
};