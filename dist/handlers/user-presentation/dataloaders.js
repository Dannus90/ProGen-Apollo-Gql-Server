"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPresentationDataLoaders = void 0;
const tslib_1 = require("tslib");
const dataloader_1 = tslib_1.__importDefault(require("dataloader"));
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
const api_calls_1 = require("./api-calls");
const createUserPresentationDataLoaders = (authorization) => {
    const byUserIdFromClaims = new dataloader_1.default(async (ids) => {
        const userPresentations = await Promise.all(ids.map(async () => {
            const response = await api_calls_1.getUserPresentation(authorization);
            if (response.status === 401) {
                const { status, statusText } = response;
                throw new http_response_error_1.HttpResponseError(statusText, status, statusText);
            }
            else if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode, message);
            }
            const userPresentation = await response.json();
            userPresentation.statusCode = response.status;
            return userPresentation;
        }));
        return ids.map(() => {
            return userPresentations[0];
        });
    });
    return {
        byUserIdFromClaims
    };
};
exports.createUserPresentationDataLoaders = createUserPresentationDataLoaders;
//# sourceMappingURL=dataloaders.js.map