import { AppDataSource } from "../config/dataSource";
import { Adress } from "../entities/Adress";

export const AdressRespository = AppDataSource.getRepository(Adress);