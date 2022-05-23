import { Router } from "express";
import profileIconController from "../controllers/profileIcon.controller.js";
import ensureAuthenticate from "../middlewares/ensureAuthenticate.middleware.js";
var profileIconRouter = Router();
profileIconRouter.get("/", ensureAuthenticate, profileIconController.findAll);
profileIconRouter.get("/:iconId", ensureAuthenticate, profileIconController.findById);
export default profileIconRouter;
