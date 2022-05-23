import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { unauthorizedError } from "../utils/errorType.utils.js";
import userService from "../services/user.service.js";

export default async function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  if (!authorization) throw unauthorizedError("Missing authorization header");

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Missing token");

  try {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as Secret;
    const { userId } = jwt.verify(token, JWT_SECRET_KEY) as {
      userId: number;
    };

    const user = await userService.findById(userId);
    res.locals.user = user;

    next();
  } catch {
    throw unauthorizedError("Invalid token");
  }
}
