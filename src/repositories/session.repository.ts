import prisma from "../database";
import { SessionData } from "../types/session";

async function insertOne(sessionData: SessionData) {
  await prisma.sessions.create({ data: sessionData });
}

export default {
  insertOne,
};
