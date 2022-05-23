import bannerRepository from "../repositories/banner.repository.js";

async function findById(id: number) {
  return await bannerRepository.findById(id);
}

async function findAll() {
  return await bannerRepository.findAll();
}

export default {
  findById,
  findAll,
};
