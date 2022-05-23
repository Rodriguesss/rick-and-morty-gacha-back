import { Request, Response } from "express";
import bannerService from "../services/banner.service.js";

async function find(req: Request, res: Response) {
  const { id } = req.params;

  const banner = await bannerService.findById(Number(id));

  res.send(banner);
}

async function findAll(req: Request, res: Response) {
  const banner = await bannerService.findAll();

  res.send(banner);
}

const bannerController = {
  find,
  findAll,
};

export default bannerController;
