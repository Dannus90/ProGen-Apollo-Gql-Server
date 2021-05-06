"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationMutations = void 0;
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
exports.educationMutations = {
    EducationMutationRoot: {
        createEducation: async (_, body, { api, authorization }) => {
            const response = await api.createEducation(authorization, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                let errorOutput = ["Unspecified error"];
                if (errors) {
                    errorOutput = Object.keys(errors).map((err) => {
                        return errors[err];
                    });
                }
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            const data = await response.json();
            const { educationId } = data;
            const gqlResponse = {
                educationId,
                statusCode: response.status
            };
            return gqlResponse;
        },
        updateEducation: async (_, body, { api, authorization }) => {
            const response = await api.updateEducation(authorization, body.input.educationId, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                const errorOutput = Object.keys(errors).map((err) => {
                    return errors[err];
                });
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            const data = await response.json();
            const gqlResponse = {
                statusCode: response.status,
                education: {
                    ...data.educationDto
                }
            };
            return gqlResponse;
        },
        deleteEducation: async (_, body, { api, authorization }) => {
            const response = await api.deleteEducation(authorization, body.input.educationId);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message, errors } = await response.json();
                const errorOutput = Object.keys(errors).map((err) => {
                    return errors[err];
                });
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
            }
            return {
                educationId: body.input?.educationId,
                statusCode: response.status
            };
        }
    }
};
//# sourceMappingURL=mutations.js.map