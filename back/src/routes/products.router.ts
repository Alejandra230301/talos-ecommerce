import { Router } from "express";
import { getProducts, getOneProduct } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:name", getOneProduct);

export default router;
