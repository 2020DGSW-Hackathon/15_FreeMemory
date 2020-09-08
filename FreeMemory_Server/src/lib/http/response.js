const createResponse = require('./createResponse');

//Http Status 200 (Success)
exports.OK = (res, message, data) => createResponse(res, 200, message, data);
exports.CREATED = (res, message, data) => createResponse(res, 201, message, data);

//Http Status 400 (client error)
exports.BAD_REQUEST = (res, message, data) => createResponse(res, 400, message, data);
exports.UNAUTHORIZED = (res, message, data) => createResponse(res, 401, message, data);
exports.FORBIDDEN = (res, message, data) => createResponse(res, 403, message, data);
exports.NOT_FOUND = (res, message, data) => createResponse(res, 404, message, data);
exports.CONFLICT = (res, message, data) => createResponse(res, 410, message, data);

//Http Status 500 (server error)
exports.INTERNAL_SERVER_ERROR = (res, message, data) => createResponse(res, 500, message, data);
