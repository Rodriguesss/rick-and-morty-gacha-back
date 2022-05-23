import { Request, Response } from "express";
import characterService from "../services/character.service.js";

async function get(req: Request, res: Response) {
  const { bannerId } = req.body;
  const { id } = res.locals.user;

  const character = await characterService.gacha(bannerId, id);

  res.send(character);
}

async function findAllByProfileId(req: Request, res: Response) {
  const { id } = res.locals.user;

  const characters = await characterService.findAllByProfileId(id);

  res.send(characters);
}

const characterController = {
  get,
  findAllByProfileId,
};

export default characterController;
