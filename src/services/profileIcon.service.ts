import profileIconRepository from "../repositories/profileIcon.repository.js";

async function findAll() {
  return await profileIconRepository.findAll();
}

async function findById(iconId: number) {
  return await profileIconRepository.findById(iconId);
}

const profileIconService = {
  findAll,
  findById,
};

export default profileIconService;
