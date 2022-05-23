import characterRepository from "../repositories/character.repository.js";
import profileRepository from "../repositories/profile.repository.js";
import bannerRepository from "../repositories/banner.repository.js";
import axios from "axios";
import { badRequest } from "../utils/errorType.utils.js";

async function gacha(bannerId: number, userId: number) {
  const profile = await profileRepository.find(userId);

  if (profile.portalWeapons <= 0) {
    throw badRequest("Você não possui arma de portais.");
  }

  const { filter } = await bannerRepository.findById(bannerId);
  const urlFilter = JSON.parse(filter);

  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character?${urlFilter.type}=${urlFilter.value}`
  );

  const totalPages = data.info.pages;
  const pageNumber = random(totalPages);

  const { data: dataWithRandomPage } = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${pageNumber}&${urlFilter.type}=${urlFilter.value}`
  );

  const characterArray = random(dataWithRandomPage.results.length);
  const {
    id: characterApiId,
    name,
    image,
  } = dataWithRandomPage.results[characterArray];

  let characterReponse = await characterRepository.findById(characterApiId);

  if (!characterReponse) {
    characterReponse = await characterRepository.get(characterApiId);
  }

  await profileRepository.subtractPortalWeapon(profile.id);

  await characterRepository.getCharacter(profile.id, characterReponse.id);

  const character = { name, path: image };

  return character;
}

function random(range: number) {
  return Math.floor(Math.random() * range);
}

async function findAllByProfileId(id: number) {
  const { id: profileId } = await profileRepository.find(id);
  return await characterRepository.findProfileId(profileId);
}

export default {
  gacha,
  findAllByProfileId,
};
