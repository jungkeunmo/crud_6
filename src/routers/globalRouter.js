import express from "express";
import {
    homeController,
} from "../controllers/globalController";


const globalRouter = express.Router();

globalRouter.get("/", homeController);

export default globalRouter;