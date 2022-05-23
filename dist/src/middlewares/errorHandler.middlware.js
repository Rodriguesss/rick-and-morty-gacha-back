var ERROR_ENUM = {
    not_found: 404,
    bad_request: 400,
    unprocessable_entity: 422,
    not_authorized: 401,
    conflict: 409
};
export function errorHandler(error, req, res, next) {
    var message = error.message, type = error.type;
    var SERVER_ERROR = 500;
    if (message === undefined)
        message = "Server error.";
    var STATUS_CODE = ERROR_ENUM[type] || SERVER_ERROR;
    return res.status(STATUS_CODE).json({ message: message });
}
