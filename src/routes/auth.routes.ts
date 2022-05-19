import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { validationSchema } from "../middlewares/schema.middleware.js";
import { joiLoginObject } from "../schemas/user.schema.js";
const authRouter = Router();

authRouter.post("/", [validationSchema(joiLoginObject)], authController.signIn);

export { authRouter };
