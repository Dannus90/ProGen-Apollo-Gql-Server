"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPresentationResolvers = void 0;
exports.userPresentationResolvers = {
    UserPresentationRoot: {
        getUserPresentation: async (_, __, { loaders }) => {
            const userPresentation = await loaders.userPresentation.byUserIdFromClaims.load("loadByUserIdInClaims");
            return {
                userPresentation: {
                    id: userPresentation?.userPresentationData.id,
                    userId: userPresentation?.userPresentationData.userId,
                    presentationSv: userPresentation?.userPresentationData.presentationSv,
                    presentationEn: userPresentation?.userPresentationData.presentationEn,
                    createdAt: userPresentation?.userPresentationData.createdAt,
                    updatedAt: userPresentation?.userPresentationData.updatedAt
                },
                statusCode: userPresentation?.statusCode
            };
        }
    }
};
//# sourceMappingURL=resolvers.js.map