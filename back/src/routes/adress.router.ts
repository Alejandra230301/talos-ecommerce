import { Router } from "express";
import checkLogin from "../middlewares/checkLogin.middleware";
import { createAdress, updateAdress } from "../controllers/adress.controller";
import validateAdress from "../middlewares/adressCreate.middleware";

const adressRouter = Router();
adressRouter.post("/", checkLogin, validateAdress, createAdress);
adressRouter.put("/:id", checkLogin, validateAdress, updateAdress);


export default adressRouter;