import { Request, Response, NextFunction } from "express";
import { ErrorFormat } from "../types/error";

const ERROR_ENUM: { [error_type: string]: number } = {
  not_found: 404,
  bad_request: 400,
  unprocessable_entity: 422,
  not_authorized: 401,
  conflict: 409,
};

export function errorHandler(
  error: ErrorFormat,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { message, type } = error;
  const SERVER_ERROR = 500;

  if (message === undefined) message = "Server error.";

  const STATUS_CODE = ERROR_ENUM[type] || SERVER_ERROR;

  return res.status(STATUS_CODE).json({ message });
}
