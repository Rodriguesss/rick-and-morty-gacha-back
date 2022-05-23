import prisma from "../database.js";

async function findAll() {
  return await prisma.profileIcon.findMany({});
}

async function findById(id: number) {
  return await prisma.profileIcon.findUnique({
    where: {
      id,
    },
  });
}

const profileIconRepository = {
  findAll,
  findById,
};

export default profileIconRepository;
