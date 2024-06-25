import { CreateOrderDto } from "../dtos/createOrderDto";
import { Order } from "../entities/Order";
import { OrderRepository } from "../repositories/order.repository";
import { ProductRepository } from "../repositories/product.repository";
import { UserRepository } from "../repositories/user.repository";

export const createOrderService = async (
  createOrderDto: CreateOrderDto
): Promise<Order> => {
  const productsF = [];
  const colorChoose = createOrderDto.color
  for await (const id of createOrderDto.products) {
    let product
    const tempProduct = await ProductRepository.findOneBy({ id });
    if(!tempProduct){
      throw new Error("Product not found")
    } 
    else {
      product = tempProduct.color.filter((e) => {
        return e.name === colorChoose.name
      })
      console.log(product)
      const finalProduct = Object.defineProperty(tempProduct, "color", {value:product})
      productsF.push(finalProduct);
    };
    
  }

  const userF = await UserRepository.findOneBy({ id: createOrderDto.userId });
  if (!userF) throw new Error("User not found");

  const newOrder = OrderRepository.create();

  newOrder.status = "approved";
  newOrder.date = new Date();
  newOrder.user = userF;
  newOrder.color = colorChoose
  newOrder.products = productsF;

  console.log(newOrder.products)

  await OrderRepository.save(newOrder);
  return newOrder;
};
