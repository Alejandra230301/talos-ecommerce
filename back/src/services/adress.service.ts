import { AdressDto } from "../dtos/adressDto";
import { CreateOrderDto } from "../dtos/createOrderDto";
import { Adress } from "../entities/Adress";
import { Order } from "../entities/Order";
import { AdressRespository } from "../repositories/adress.repository";
import { OrderRepository } from "../repositories/order.repository";
import { ProductRepository } from "../repositories/product.repository";
import { UserRepository } from "../repositories/user.repository";

export const createAdressService = async (
  createAdressDto: AdressDto
): Promise<Adress> => {

  const { adress, phone, country, state, city, code } = createAdressDto;

  const userF = await UserRepository.findOneBy({ id: createAdressDto.userId });
  if (!userF) throw new Error("User not found");

  const newAdress = AdressRespository.create();

  newAdress.user = userF;
  newAdress.adress = adress;
  newAdress.city = city;
  newAdress.code = code;
  newAdress.country = country;
  newAdress.phone = phone;
  newAdress.state = state;

  await AdressRespository.save(newAdress);
  return newAdress;
};

export const updateAdressService = async (
  id: number,
  createAdressDto: AdressDto
): Promise<Adress> => {

  const { adress, phone, country, state, city, code } = createAdressDto;

  const userF = await UserRepository.findOneBy({ id: createAdressDto.userId });
  if (!userF) throw new Error("User not found");

  const updateAdress = await AdressRespository.findOneBy({
    id: id,
  });

  if (updateAdress) {
    updateAdress.adress = adress;
    updateAdress.city = city;
    updateAdress.code = code;
    updateAdress.country = country;
    updateAdress.phone = phone;
    updateAdress.state = state;
    await AdressRespository.save(updateAdress)
}

  const newAdress = AdressRespository.create();

  newAdress.user = userF;
  newAdress.adress = adress;
  newAdress.city = city;
  newAdress.code = code;
  newAdress.country = country;
  newAdress.phone = phone;
  newAdress.state = state;

  await AdressRespository.save(newAdress);
  return newAdress;
};