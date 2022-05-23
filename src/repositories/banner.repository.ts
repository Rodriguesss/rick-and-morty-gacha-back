import prisma from "../database.js";

async function findById(id: number) {
  return prisma.banners.findUnique({
    where: {
      id,
    },
  });
}

async function findAll() {
  return prisma.banners.findMany();
}

export default {
  findById,
  findAll,
};
