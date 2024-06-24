import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { createAdressService, updateAdressService } from "../services/adress.service";

export const createAdress = catchedController(
  async (req: Request, res: Response) => {
    console.log(req.body)
    const { adress, phone, country, state, city, code } = req.body;
    const userId = req.body.userId;
    const newAdress = await createAdressService({ userId, adress, phone, country, state, city, code });
    res.send(newAdress);
  }
);

export const updateAdress = catchedController(
  async (req: Request, res: Response) => {
    console.log(req.body)
    const id : number = Number(req.params.id)
    const { adress, phone, country, state, city, code } = req.body;
    const userId = req.body.userId;
    const updateAdress = await updateAdressService(id, { userId, adress, phone, country, state, city, code });
    res.send(updateAdress);
  }
);