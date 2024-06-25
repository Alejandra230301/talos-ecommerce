import { IColor } from "../entities/Product";

export interface CreateOrderDto {
  userId: number;
  products: number[];
  color: IColor
}
