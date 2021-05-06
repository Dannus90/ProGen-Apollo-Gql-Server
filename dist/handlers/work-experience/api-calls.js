"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkExperiences = exports.getWorkExperience = exports.deleteWorkExperience = exports.updateWorkExperience = exports.createWorkExperience = void 0;
const base_1 = require("../../config/api/base");
const httpClient_1 = require("../../config/api/httpClient");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createWorkExperience = async (authorization, input) => {
    return await httpClient_1.fetchPostAuth(`${base_1.PROGEN_BASE_URL}/user/workexperience`, "POST", authorization, input);
};
exports.createWorkExperience = createWorkExperience;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateWorkExperience = async (authorization, workExperienceId, input) => {
    const data = { ...input };
    delete data.workExperienceId;
    return await httpClient_1.fetchPutAuth(`${base_1.PROGEN_BASE_URL}/user/workexperience/${workExperienceId}`, "PUT", authorization, data);
};
exports.updateWorkExperience = updateWorkExperience;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteWorkExperience = async (authorization, workExperienceId) => {
    return await httpClient_1.fetchDeleteAuth(`${base_1.PROGEN_BASE_URL}/user/workexperience/${workExperienceId}`, "DELETE", authorization);
};
exports.deleteWorkExperience = deleteWorkExperience;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getWorkExperience = async (authorization, workExperienceId) => {
    return await httpClient_1.fetchGetAuth(`${base_1.PROGEN_BASE_URL}/user/workexperience/${workExperienceId}`, "GET", authorization);
};
exports.getWorkExperience = getWorkExperience;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getWorkExperiences = async (authorization) => {
    return await httpClient_1.fetchGetAuth(`${base_1.PROGEN_BASE_URL}/user/workexperience`, "GET", authorization);
};
exports.getWorkExperiences = getWorkExperiences;
//# sourceMappingURL=api-calls.js.map