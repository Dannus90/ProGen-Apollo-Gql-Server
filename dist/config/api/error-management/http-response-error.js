"use strict";
/**
 * Custom http-response-error.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCodeChecker = exports.HttpResponseError = void 0;
class HttpResponseError extends Error {
    constructor(type, statusCode, message) {
        super(message);
        this.__proto__ = Error;
        this.type = type;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpResponseError.prototype);
    }
}
exports.HttpResponseError = HttpResponseError;
const statusCodeChecker = (statusCode) => {
    return statusCode >= 200 && statusCode <= 250;
};
exports.statusCodeChecker = statusCodeChecker;
//# sourceMappingURL=http-response-error.js.map