import { Router } from "express";
import usersRouter from "./users.router";
import ordersRouter from "./orders.router";
import productsRouter from "./products.router";
import adressRouter from "./adress.router";

const router = Router();

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);
router.use("/products", productsRouter);
router.use("/adress", adressRouter);


export default router;
