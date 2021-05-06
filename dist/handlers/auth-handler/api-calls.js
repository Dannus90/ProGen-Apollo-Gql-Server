"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.changeEmail = exports.refreshToken = exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const base_1 = require("../../config/api/base");
const httpClient_1 = require("../../config/api/httpClient");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const registerUser = async (input) => {
    const payload = {
        firstname: input?.firstName,
        lastname: input?.lastName,
        email: input?.email,
        password: input?.password
    };
    return await httpClient_1.fetchPostNoAuth(`${base_1.PROGEN_BASE_URL}/user/auth/register`, "POST", payload);
};
exports.registerUser = registerUser;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loginUser = async (input) => {
    const payload = {
        email: input?.email,
        password: input?.password
    };
    return await httpClient_1.fetchPostNoAuth(`${base_1.PROGEN_BASE_URL}/user/auth/login`, "POST", payload);
};
exports.loginUser = loginUser;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logoutUser = async (authorization) => {
    return await httpClient_1.fetchPostNoBody(`${base_1.PROGEN_BASE_URL}/user/auth/logout`, "POST", authorization);
};
exports.logoutUser = logoutUser;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshToken = async (authorization, input) => {
    return await httpClient_1.fetchPostAuth(`${base_1.PROGEN_BASE_URL}/user/auth/refresh`, "POST", authorization, input);
};
exports.refreshToken = refreshToken;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeEmail = async (authorization, input) => {
    return await httpClient_1.fetchPostAuth(`${base_1.PROGEN_BASE_URL}/user/auth/change-email`, "POST", authorization, input);
};
exports.changeEmail = changeEmail;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changePassword = async (authorization, input) => {
    return await httpClient_1.fetchPostAuth(`${base_1.PROGEN_BASE_URL}/user/auth/change-password`, "POST", authorization, input);
};
exports.changePassword = changePassword;
//# sourceMappingURL=api-calls.js.map