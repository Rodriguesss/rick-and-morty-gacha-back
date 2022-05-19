import prisma from "../database.js";
import { SessionData } from "../types/session.js";

async function insertOne(sessionData: SessionData) {
  await prisma.sessions.create({ data: sessionData });
}

export default {
  insertOne,
};
