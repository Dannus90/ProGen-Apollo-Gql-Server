"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workExperienceMutations = void 0;
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
exports.workExperienceMutations = {
    WorkExperienceMutationRoot: {
        createWorkExperience: async (_, body, { api, authorization }) => {
            const response = await api.createWorkExperience(authorization, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                const errorOutput = Object.keys(errors).map((err) => {
                    return errors[err];
                });
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            const data = await response.json();
            const { workExperienceId } = data;
            const gqlResponse = {
                workExperienceId,
                statusCode: response.status
            };
            return gqlResponse;
        },
        updateWorkExperience: async (_, body, { api, authorization }) => {
            const response = await api.updateWorkExperience(authorization, body.input?.workExperienceId, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                const errorOutput = Object.keys(errors).map((err) => {
                    return errors[err];
                });
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            const data = await response.json();
            const gqlResponse = {
                workExperience: {
                    ...data.workExperienceDto,
                    statusCode: response.status
                }
            };
            return gqlResponse;
        },
        deleteWorkExperience: async (_, body, { api, authorization }) => {
            const response = await api.deleteWorkExperience(authorization, body.input.workExperienceId);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                const errorOutput = Object.keys(errors).map((err) => {
                    return errors[err];
                });
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            return {
                workExperienceId: body.input?.workExperienceId ?? "",
                statusCode: response.status
            };
        }
    }
};
//# sourceMappingURL=mutations.js.map