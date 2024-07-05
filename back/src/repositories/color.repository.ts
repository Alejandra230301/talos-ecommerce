import { AppDataSource } from "../config/dataSource";
import { Color } from "../entities/Color";

export const ColorRespository = AppDataSource.getRepository(Color);