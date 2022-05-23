import { UserRequestBody } from "../types/user";
import bcrypt from "bcrypt";
import userRepository from "../repositories/user.repository.js";
import { badRequest } from "../utils/errorType.utils.js";

async function insertNewUser(user: UserRequestBody) {
  const passwordHash = bcrypt.hashSync(user.password, 10);

  await userRepository.insertOne({ ...user, password: passwordHash });
}

async function checkEmailAndNicknameAlreadyRegistered(
  email: string,
  nickname: string
) {
  const emailExists = await userRepository.findEmail(email);
  if (emailExists) throw badRequest("Email já cadastrado.");

  const nicknameExists = await userRepository.findNickname(nickname);
  if (nicknameExists) throw badRequest("Nickname já cadastrado.");
}

async function findById(userId: number) {
  return await userRepository.findById(userId);
}

export default {
  insertNewUser,
  checkEmailAndNicknameAlreadyRegistered,
  findById,
};
