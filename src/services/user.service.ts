import { UserRequestBody } from "../types/user";
import bcrypt from "bcrypt";
import userRepository from "../repositories/user.repository.js";
import { badRequest } from "../utils/errorType.utils.js";
//import sessionRepository from "../repositories/session.repository";

async function insertNewUser(user: UserRequestBody) {
  const passwordHash = bcrypt.hashSync(user.password, 10);

  await userRepository.insertOne({ ...user, password: passwordHash });
}

async function checkEmailAlreadyRegistered(email: string) {
  const emailExists = await userRepository.findEmail(email);

  if (emailExists) throw badRequest("Email já cadastrado.");
}

export default {
  insertNewUser,
  checkEmailAlreadyRegistered,
};
