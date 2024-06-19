import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService, getOneProductService } from "../services/products.service";
import { Product } from "../entities/Product";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getOneProduct = catchedController(
  async (req: Request, res: Response) => {
    console.log(req.params)
    const name : string = req.params.name
    const products: Product | null = await getOneProductService(name);
    res.json(products);
  }
);
