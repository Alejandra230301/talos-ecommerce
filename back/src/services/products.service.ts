import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getOneProductService = async (name : string): Promise<Product | null> => {
  const product: Product | null = await ProductRepository.findOneBy({
    product: name,
  });
  return product
};
