"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWorkExperienceDataLoaders = void 0;
const tslib_1 = require("tslib");
const dataloader_1 = tslib_1.__importDefault(require("dataloader"));
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
const api_calls_1 = require("./api-calls");
const createWorkExperienceDataLoaders = (authorization) => {
    const byWorkExperienceId = new dataloader_1.default(async (ids) => {
        const workExperiences = await Promise.all(ids.map(async (id) => {
            const response = await api_calls_1.getWorkExperience(authorization, id);
            if (response.status === 401) {
                const { status, statusText } = response;
                throw new http_response_error_1.HttpResponseError(statusText, status, statusText);
            }
            else if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                const errorOutput = Object.keys(errors).map((err) => {
                    return errors[err];
                });
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            const workExperience = await response.json();
            workExperience.workExperienceDto.statusCode = response.status;
            return workExperience;
        }));
        return ids.map((id) => {
            return workExperiences.find((we) => we.workExperienceDto.id === id);
        });
    });
    const workExperiencesByUserIdInClaims = new dataloader_1.default(async (ids) => {
        const workExperiences = await Promise.all(ids.map(async () => {
            const response = await api_calls_1.getWorkExperiences(authorization);
            if (response.status === 401) {
                const { status, statusText } = response;
                throw new http_response_error_1.HttpResponseError(statusText, status, statusText);
            }
            else if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                const errorOutput = Object.keys(errors).map((err) => {
                    return errors[err];
                });
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            const workExperiencesResponse = await response.json();
            workExperiencesResponse.statusCode = response.status;
            return workExperiencesResponse;
        }));
        return ids.map(() => {
            return workExperiences[0];
        });
    });
    return {
        byWorkExperienceId,
        workExperiencesByUserIdInClaims
    };
};
exports.createWorkExperienceDataLoaders = createWorkExperienceDataLoaders;
//# sourceMappingURL=dataloaders.js.map