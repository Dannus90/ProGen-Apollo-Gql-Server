"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiMethods = void 0;
const api_calls_1 = require("./handlers/auth-handler/api-calls");
const api_calls_2 = require("./handlers/user-data/api-calls");
const api_calls_3 = require("./handlers/work-experience/api-calls");
const api_calls_4 = require("./handlers/user-presentation/api-calls");
const api_calls_5 = require("./handlers/education/api-calls");
const getApiMethods = () => {
    return {
        registerUser: api_calls_1.registerUser,
        loginUser: api_calls_1.loginUser,
        logoutUser: api_calls_1.logoutUser,
        refreshToken: api_calls_1.refreshToken,
        updateUserData: api_calls_2.updateUserData,
        getFullUserInformation: api_calls_2.getFullUserInformation,
        changeEmail: api_calls_1.changeEmail,
        changePassword: api_calls_1.changePassword,
        updateUserPresentationData: api_calls_4.updateUserPresentationData,
        createWorkExperience: api_calls_3.createWorkExperience,
        updateWorkExperience: api_calls_3.updateWorkExperience,
        getWorkExperience: api_calls_3.getWorkExperience,
        deleteWorkExperience: api_calls_3.deleteWorkExperience,
        createEducation: api_calls_5.createEducation,
        getEducation: api_calls_5.getEducation,
        updateEducation: api_calls_5.updateEducation,
        deleteEducation: api_calls_5.deleteEducation
    };
};
exports.getApiMethods = getApiMethods;
//# sourceMappingURL=api-gatherer.js.map