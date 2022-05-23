import prisma from "../database.js";

async function find(usersId: number) {
  return await prisma.profiles.findUnique({
    where: {
      usersId,
    },
  });
}

async function linkIcon(usersId: number, profileIconId: number) {
  await prisma.profiles.update({
    where: {
      usersId,
    },
    data: {
      profileIconId,
    },
  });
}

async function create(usersId: number) {
  await prisma.profiles.create({
    data: {
      usersId,
    },
  });
}

async function subtractPortalWeapon(id: number) {
  await prisma.profiles.update({
    where: { id },
    data: { portalWeapons: { decrement: 1 } },
  });
}

export default {
  find,
  linkIcon,
  create,
  subtractPortalWeapon,
};
