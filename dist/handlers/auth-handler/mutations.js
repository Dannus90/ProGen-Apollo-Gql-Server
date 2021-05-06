"use strict";
/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMutations = void 0;
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
exports.authMutations = {
    AuthenticationMutationRoot: {
        registerUser: async (_, body, { api }) => {
            const response = await api.registerUser(body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode, message);
            }
            const gqlResponse = {
                statusCode: response.status,
                message: "Successful registration"
            };
            return gqlResponse;
        },
        loginUser: async (_, body, { api }) => {
            const response = await api.loginUser(body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message);
            }
            const { tokenResponse } = await response.json();
            const gqlResponse = {
                statusCode: response.status,
                accessToken: tokenResponse.accessToken,
                refreshToken: tokenResponse.refreshToken
            };
            return gqlResponse;
        },
        logoutUser: async (_, __, { api, authorization }) => {
            const response = await api.logoutUser(authorization);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                throw new http_response_error_1.HttpResponseError(response.statusText, response.status, response.statusText);
            }
            const gqlResponse = {
                statusCode: response.status,
                message: "Successful logout"
            };
            return gqlResponse;
        },
        refreshToken: async (_, body, { api, authorization }) => {
            const response = await api.refreshToken(authorization, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { statusCode, message, type } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message);
            }
            const { tokenResponse } = await response.json();
            const gqlResponse = {
                statusCode: response.status,
                accessToken: tokenResponse.accessToken,
                refreshToken: tokenResponse.refreshToken
            };
            return gqlResponse;
        },
        changeEmail: async (_, body, { api, authorization }) => {
            const response = await api.changeEmail(authorization, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { statusCode, message, type } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message);
            }
            const gqlResponse = {
                statusCode: response.status,
                message: "Email updated"
            };
            return gqlResponse;
        },
        changePassword: async (_, body, { api, authorization }) => {
            const response = await api.changePassword(authorization, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { statusCode, message, type } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message);
            }
            const gqlResponse = {
                statusCode: response.status,
                message: "Password updated"
            };
            return gqlResponse;
        }
    }
};
//# sourceMappingURL=mutations.js.map