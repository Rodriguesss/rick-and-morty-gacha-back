import { Request, Response } from "express";
import authService from "../services/auth.service.js";
import { UserLoginBody } from "../types/user.js";

async function signIn(req: Request, res: Response) {
  const { nickname, password }: UserLoginBody = req.body;

  const user = await authService.findNickname(nickname);

  const token = await authService.signIn(user, password);

  res.status(200).send({ token, nickname });
}

const authController = {
  signIn,
};

export default authController;
