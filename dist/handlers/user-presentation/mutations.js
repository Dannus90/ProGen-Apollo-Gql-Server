"use strict";
/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPresentationMutations = void 0;
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
exports.userPresentationMutations = {
    UserPresentationMutationRoot: {
        updateUserPresentation: async (_, body, { api, authorization }) => {
            const response = await api.updateUserPresentationData(authorization, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message);
            }
            const data = await response.json();
            const { id, userId, presentationSv, presentationEn, createdAt, updatedAt } = data.userPresentationData;
            const gqlResponse = {
                userPresentation: {
                    id: id,
                    userId: userId,
                    presentationSv,
                    presentationEn,
                    createdAt: createdAt,
                    updatedAt: updatedAt
                },
                statusCode: response.status
            };
            return gqlResponse;
        }
    }
};
//# sourceMappingURL=mutations.js.map