import { Request, Response } from "express";
import { profileService } from "../services/profile.service.js";

async function create(req: Request, res: Response) {
  const { id: userId } = res.locals.user;

  await profileService.create(userId);

  res.send("OK");
}

async function find(req: Request, res: Response) {
  const { id: userId } = res.locals.user;

  const profile = await profileService.find(userId);
  res.send(profile);
}

async function linkIcon(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const { profileIconId } = req.body;

  await profileService.checkProfileContainsIcon(userId);
  await profileService.linkIcon(userId, profileIconId);

  res.send("OK");
}

const profileController = {
  find,
  linkIcon,
  create,
};

export { profileController };
