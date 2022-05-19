import { ErrorFormat } from "../types/error";

function unprocessEntity(message: string): ErrorFormat {
  return { type: "unprocessable_entity", message };
}

function badRequest(message: string): ErrorFormat {
  return { type: "bad_request", message };
}

export { unprocessEntity, badRequest };
