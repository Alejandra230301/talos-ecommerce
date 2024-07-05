import { Router } from "express";
import { getProducts, getOneProduct, updateStock } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:name", getOneProduct);
router.put("/stock/:name", updateStock);

export default router;
