import { Router } from "express";
import bannerController from "../controllers/banner.controller.js";
import ensureAuthenticate from "../middlewares/ensureAuthenticate.middleware.js";
var bannerRouter = Router();
bannerRouter.get("/", ensureAuthenticate, bannerController.findAll);
bannerRouter.get("/:id", ensureAuthenticate, bannerController.find);
export default bannerRouter;
