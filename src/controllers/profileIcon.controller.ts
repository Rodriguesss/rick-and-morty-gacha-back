import { Request, Response } from "express";
import profileIconService from "../services/profileIcon.service.js";

async function findAll(req: Request, res: Response) {
  const profile = await profileIconService.findAll();

  res.send(profile);
}

async function findById(req: Request, res: Response) {
  const { iconId } = req.params;

  const profile = await profileIconService.findById(Number(iconId));

  res.send(profile);
}

const profileIconController = {
  findAll,
  findById,
};

export default profileIconController;
