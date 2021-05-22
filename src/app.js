import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import connect from "../db";
import globalRouter from "./routers/globalRouter";
import adminRouter from "./routers/adminRouter";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
//import Book from "./models/Book";
//mport Author from "./models/Author";

const PORT = process.env.PORT;
const app = express();
connect();

app.set("view engine", "pug");
//app.use(helmet());
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const allBook = async () => {
    //const books = await Book.find().populate({
        //path : `author`,
        //model : Author,
    //});

    //console.log(books);
//};

//const allAuthor = async()=> {
    //const author = await Author.find().populate({
        //path : `books`,
        //model : Book,
    //});

    //console.log(author);
//};

//allAuthor();

app.use("/", globalRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log(`SERVER START🙃, http://localhost:${PORT}`);
});