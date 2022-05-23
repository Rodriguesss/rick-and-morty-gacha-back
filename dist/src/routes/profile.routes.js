import { Router } from "express";
import { profileController } from "../controllers/profile.controller.js";
import ensureAuthenticate from "../middlewares/ensureAuthenticate.middleware.js";
var profileRouter = Router();
profileRouter.get("/", ensureAuthenticate, profileController.find);
profileRouter.post("/", ensureAuthenticate, profileController.create);
profileRouter.post("/link-icon", ensureAuthenticate, profileController.linkIcon);
export default profileRouter;
