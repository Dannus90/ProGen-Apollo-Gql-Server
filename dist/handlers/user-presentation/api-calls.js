"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPresentation = exports.updateUserPresentationData = void 0;
const base_1 = require("../../config/api/base");
const httpClient_1 = require("../../config/api/httpClient");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateUserPresentationData = async (authorization, input) => {
    return await httpClient_1.fetchPutAuth(`${base_1.PROGEN_BASE_URL}/user/userpresentation`, "PUT", authorization, input);
};
exports.updateUserPresentationData = updateUserPresentationData;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUserPresentation = async (authorization) => {
    return await httpClient_1.fetchGetAuth(`${base_1.PROGEN_BASE_URL}/user/userpresentation`, "GET", authorization);
};
exports.getUserPresentation = getUserPresentation;
//# sourceMappingURL=api-calls.js.map