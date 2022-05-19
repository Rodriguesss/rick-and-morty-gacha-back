import prisma from "../database.js";
import { UserRequestBody } from "../types/user.js";

async function insertOne(createUserData: UserRequestBody) {
  prisma.users.create({ data: createUserData });
}

async function findEmail(email: string) {
  return prisma.users.findUnique({ where: { email } });
}

async function findNickname(nickname: string) {
  return prisma.users.findUnique({ where: { nickname } });
}

export default {
  insertOne,
  findEmail,
  findNickname,
};
