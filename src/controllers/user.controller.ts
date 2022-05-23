import { Request, Response } from "express";
import userService from "../services/user.service.js";
import { UserRequestBody } from "../types/user.js";

async function create(req: Request, res: Response) {
  const { email, nickname }: UserRequestBody = req.body;

  await userService.checkEmailAndNicknameAlreadyRegistered(email, nickname);
  await userService.insertNewUser(req.body);

  res.sendStatus(201);
}

const userController = {
  create,
};

export default userController;
