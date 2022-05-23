function unprocessEntity(message) {
    return { type: "unprocessable_entity", message: message };
}
function badRequest(message) {
    return { type: "bad_request", message: message };
}
function unauthorizedError(message) {
    return { type: "unauthorized", message: message };
}
function conflict(message) {
    return { type: "conflict", message: message };
}
export { unprocessEntity, badRequest, unauthorizedError, conflict };
