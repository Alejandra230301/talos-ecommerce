import { IColor, Product } from "../entities/Product";
import { ColorRespository } from "../repositories/color.repository";
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
    route: name,
  });
  return product
};

export const updateStockService = async (nameProduct : string, color : IColor): Promise<Product | null> => {

  console.log(color.name)

  const updateProduct: Product | null = await ProductRepository.findOneBy({
    route: nameProduct,
  });

  // const colorPrueba = await ColorRespository.find()

  console.log("ESTE ES EL COLOR")
  console.log(color)

  updateProduct?.color.map((e) => {
      if(e.name === color.name){
        if(e.stock < 1){
          throw new Error("Out of stock")
        } 
        else{
          e.stock -= 1
        }
      }
  })

  console.log(updateProduct)

  if (updateProduct) {
    await ProductRepository.save(updateProduct)
  }

  return updateProduct
};
