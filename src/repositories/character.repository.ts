import { Characters } from "@prisma/client";
import prisma from "../database.js";

async function get(apiId: number): Promise<Characters> {
  return prisma.characters.create({
    data: {
      apiId,
    },
  });
}

async function findById(id: number): Promise<Characters> {
  return prisma.characters.findUnique({ where: { id } });
}

async function getCharacter(profileId: number, characterId: number) {
  await prisma.profileCharacters.create({
    data: {
      characterId,
      profileId,
    },
  });
}

async function findProfileId(profileId: number) {
  return await prisma.profileCharacters.findMany({
    select: {
      characters: {
        select: {
          apiId: true,
        },
      },
    },
    where: {
      profileId,
    },
  });
}

export default {
  get,
  findById,
  getCharacter,
  findProfileId,
};
