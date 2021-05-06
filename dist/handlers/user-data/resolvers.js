"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataResolvers = void 0;
exports.userDataResolvers = {
    UserDataRoot: {
        getFullUserInformation: async (_, __, { loaders }) => {
            const userData = await loaders.userData.byUserIdFromClaims.load("loadSingle");
            return {
                user: userData?.fullUserInformationDto.user,
                userData: userData?.fullUserInformationDto.userData,
                statusCode: userData?.fullUserInformationDto.statusCode
            };
        }
    }
};
//# sourceMappingURL=resolvers.js.map