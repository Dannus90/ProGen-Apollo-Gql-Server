"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEducationDataLoaders = void 0;
const tslib_1 = require("tslib");
const dataloader_1 = tslib_1.__importDefault(require("dataloader"));
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
const api_calls_1 = require("./api-calls");
const createEducationDataLoaders = (authorization) => {
    const byEducationId = new dataloader_1.default(async (ids) => {
        const educations = await Promise.all(ids.map(async (id) => {
            const response = await api_calls_1.getEducation(authorization, id);
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
            const education = await response.json();
            education.statusCode = response.status;
            return education;
        }));
        return ids.map((id) => {
            return educations.find((we) => we.educationDto.id === id);
        });
    });
    const educationsByUserIdInClaims = new dataloader_1.default(async (ids) => {
        const educations = await Promise.all(ids.map(async () => {
            const response = await api_calls_1.getEducations(authorization);
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
            const educationsResponse = await response.json();
            educationsResponse.statusCode = response.status;
            return educationsResponse;
        }));
        return ids.map(() => {
            return educations[0];
        });
    });
    return {
        byEducationId,
        educationsByUserIdInClaims
    };
};
exports.createEducationDataLoaders = createEducationDataLoaders;
//# sourceMappingURL=dataloaders.js.map