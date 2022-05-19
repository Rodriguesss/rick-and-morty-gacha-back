import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { validationSchema } from "../middlewares/schema.middleware.js";
import { joiUserObject } from "../schemas/user.schema.js";

const userRouter = Router();

userRouter.post("/", [validationSchema(joiUserObject)], userController.create);

export default userRouter;
