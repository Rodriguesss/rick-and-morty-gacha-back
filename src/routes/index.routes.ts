import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import userRouter from "./user.routes.js";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/auth", authRouter);

export default routes;
