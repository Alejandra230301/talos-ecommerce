import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService, getOneProductService, updateStockService } from "../services/products.service";
import { Product } from "../entities/Product";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getOneProduct = catchedController(
  async (req: Request, res: Response) => {
    const name : string = req.params.name
    const products: Product | null = await getOneProductService(name);
    res.json(products);
  }
);

export const updateStock = catchedController(
  async (req: Request, res: Response) => {
    console.log("ENTRO")
    console.log(req.body)
    const nameProduct : string = req.params.name
    const { color } = req.body;
    console.log(nameProduct)
    console.log(color)
    const updateStock = await updateStockService(nameProduct, color);
    res.send(updateStock);
  }
);
