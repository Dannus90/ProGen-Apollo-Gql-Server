import { Context } from "./../../context";

export interface UserPresentationResolverResponse {
  userPresentation:
    | {
        id: string;
        userId: string;
        presentationSv: string;
        presentationEn: string;
        createdAt: Date;
        updatedAt: Date;
      }
    | undefined;
  statusCode?: number;
}

export const userPresentationResolvers = {
  UserPresentationRoot: {
    getUserPresentation: async (
      _,
      __,
      { loaders }: Context
    ): Promise<UserPresentationResolverResponse> => {
      const userPresentation = await loaders.userPresentation.byUserIdFromClaims.load("loadSingle");

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
