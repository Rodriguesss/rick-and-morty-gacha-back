import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { unprocessEntity } from "../utils/errorType.utils.js";

export const validationSchema = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) throw unprocessEntity(error.message);

    next();
  };
};
