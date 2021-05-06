"use strict";
/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataMutations = void 0;
const http_response_error_1 = require("../../config/api/error-management/http-response-error");
exports.userDataMutations = {
    UserDataMutationRoot: {
        updateUserData: async (_, body, { api, authorization }) => {
            const response = await api.updateUserData(authorization, body.input);
            if (!http_response_error_1.statusCodeChecker(response.status)) {
                const { type, statusCode, message } = await response.json();
                throw new http_response_error_1.HttpResponseError(type, statusCode ?? response.status, message);
            }
            const userData = await response.json();
            const { id, userId, emailCv, phoneNumber, firstName, lastName, citySv, cityEn, countrySv, countryEn, profileImage, profileImagePublicId, createdAt, updatedAt } = userData.userDataDto;
            const gqlResponse = {
                id: id,
                userId: userId,
                firstName,
                lastName,
                phoneNumber: phoneNumber,
                emailCv: emailCv,
                citySv: citySv,
                cityEn: cityEn,
                countrySv: countrySv,
                countryEn: countryEn,
                profileImage: profileImage,
                profileImagePublicId: profileImagePublicId,
                createdAt: createdAt,
                updatedAt: updatedAt,
                statusCode: response.status
            };
            return gqlResponse;
        }
    }
};
//# sourceMappingURL=mutations.js.map