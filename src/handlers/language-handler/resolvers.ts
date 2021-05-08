import { Context } from "./../../context";

export interface UserLanguageResolverResponse {
  language: {
    id: string;
    userId: string;
    languageSv: string;
    languageEn: string;
  };
  statusCode: number;
}

export const otherInformationResolvers = {
  OtherInformationRoot: {
    getOtherInformation: async (
      _,
      { input: { languageId } },
      { loaders }: Context
    ): Promise<UserLanguageResolverResponse | null> => {
      const languageResponse = await loaders.language.byLanguageId.load(languageId);

      if (!languageResponse) return null;

      const { id, userId, languageEn, languageSv, statusCode  } = languageResponse

      return {
        language: {
          id,
          userId,
          languageSv,
          languageEn
        },
        statusCode: statusCode
      };
    }
  }
};
