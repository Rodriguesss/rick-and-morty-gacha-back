import { Router } from "express";
import characterController from "../controllers/character.controller.js";
import ensureAuthenticate from "../middlewares/ensureAuthenticate.middleware.js";

const characterRouter = Router();

characterRouter.post("/", ensureAuthenticate, characterController.get);
characterRouter.get(
  "/",
  ensureAuthenticate,
  characterController.findAllByProfileId
);

export default characterRouter;
