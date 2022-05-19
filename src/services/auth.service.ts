import bcrypt from "bcrypt";
import { Users } from "@prisma/client";
import jwt, { Secret } from "jsonwebtoken";
import userRepository from "../repositories/user.repository.js";
import sessionRepository from "../repositories/session.repository.js";
import { badRequest } from "../utils/errorType.utils.js";

async function findNickname(nickname: string) {
  return await userRepository.findNickname(nickname);
}

async function signIn(user: Users | null, password: string) {
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as Secret;

  if (user && bcrypt.compareSync(password, user.password)) {
    const { id: userId, email } = user;

    const token = jwt.sign({ userId, email }, JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    await sessionRepository.insertOne({ userId });

    return token;
  } else {
    throw badRequest("Nickname ou senha inválidos.");
  }
}

export default { findNickname, signIn };
