"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.getFullUserInformation = void 0;
const base_1 = require("../../config/api/base");
const httpClient_1 = require("../../config/api/httpClient");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFullUserInformation = async (authorization) => {
    return await httpClient_1.fetchGetAuth(`${base_1.PROGEN_BASE_URL}/user/userData`, "GET", authorization);
};
exports.getFullUserInformation = getFullUserInformation;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateUserData = async (authorization, input) => {
    return await httpClient_1.fetchPutAuth(`${base_1.PROGEN_BASE_URL}/user/userData`, "PUT", authorization, input);
};
exports.updateUserData = updateUserData;
//# sourceMappingURL=api-calls.js.map