import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/errors";
import { checkUserExists } from "../services/user.service";
import { checkProductExists } from "../services/products.service";

const validateAdress = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body)
  next();
//   const { products } = req.body;
//   if (!products.length)
//     next(new ClientError("Order must have an array of products"));
//   if (!products || products.length === 0)
//     return next(new ClientError("Order must have at least one item"));
//   next();
};


export default validateAdress;