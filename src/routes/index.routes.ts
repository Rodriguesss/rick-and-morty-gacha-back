import { Router } from "express";
import authRouter from "./auth.routes.js";
import profileRouter from "./profile.routes.js";
import profileIconRouter from "./profileIcon.routes.js";
import userRouter from "./user.routes.js";
import bannerRouter from "./banner.routes.js";
import characterRouter from "./character.routes.js";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/auth", authRouter);
routes.use("/profiles", profileRouter);
routes.use("/profile-icons", profileIconRouter);
routes.use("/banners", bannerRouter);
routes.use("/characters", characterRouter);

export default routes;
