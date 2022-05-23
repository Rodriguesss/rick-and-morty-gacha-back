import profileRepository from "../repositories/profile.repository.js";
import { conflict } from "../utils/errorType.utils.js";

async function find(userId: number) {
  return await profileRepository.find(userId);
}

async function linkIcon(userId: number, profileIconId: number) {
  await profileRepository.linkIcon(userId, profileIconId);
}

async function create(userId: number) {
  await profileRepository.create(userId);
}

async function checkProfileContainsIcon(userId: number) {
  const profile = await profileRepository.find(userId);

  if (profile.profileIconId) {
    throw conflict("Esta conta já possui um icone vinculado a ela");
  }
}

async function invocation(profileId: number) {
  await profileRepository.subtractPortalWeapon(profileId);
}

const profileService = {
  find,
  linkIcon,
  create,
  checkProfileContainsIcon,
  invocation,
};

export { profileService };
