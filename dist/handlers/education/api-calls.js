"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEducations = exports.getEducation = exports.deleteEducation = exports.updateEducation = exports.createEducation = void 0;
const base_1 = require("../../config/api/base");
const httpClient_1 = require("../../config/api/httpClient");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createEducation = async (authorization, input) => {
    return await httpClient_1.fetchPostAuth(`${base_1.PROGEN_BASE_URL}/user/education`, "POST", authorization, input);
};
exports.createEducation = createEducation;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateEducation = async (authorization, educationId, input) => {
    const data = { ...input };
    return await httpClient_1.fetchPutAuth(`${base_1.PROGEN_BASE_URL}/user/education/${educationId}`, "PUT", authorization, data);
};
exports.updateEducation = updateEducation;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteEducation = async (authorization, educationId) => {
    return await httpClient_1.fetchDeleteAuth(`${base_1.PROGEN_BASE_URL}/user/education/${educationId}`, "DELETE", authorization);
};
exports.deleteEducation = deleteEducation;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getEducation = async (authorization, educationId) => {
    return await httpClient_1.fetchGetAuth(`${base_1.PROGEN_BASE_URL}/user/education/${educationId}`, "GET", authorization);
};
exports.getEducation = getEducation;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getEducations = async (authorization) => {
    return await httpClient_1.fetchGetAuth(`${base_1.PROGEN_BASE_URL}/user/education`, "GET", authorization);
};
exports.getEducations = getEducations;
//# sourceMappingURL=api-calls.js.map