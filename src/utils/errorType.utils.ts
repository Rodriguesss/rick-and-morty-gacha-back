import { ErrorFormat } from "../types/error";

function unprocessEntity(message: string): ErrorFormat {
  return { type: "unprocessable_entity", message };
}

function badRequest(message: string): ErrorFormat {
  return { type: "bad_request", message };
}

function unauthorizedError(message: string): ErrorFormat {
  return { type: "unauthorized", message };
}

function conflict(message: string): ErrorFormat {
  return { type: "conflict", message };
}

export { unprocessEntity, badRequest, unauthorizedError, conflict };
