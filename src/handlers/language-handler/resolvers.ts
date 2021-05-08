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

export const languageResolvers = {
  LanguageRoot: {
    getLanguage: async (
      _,
      { input: { languageId } },
      { loaders }: Context
    ): Promise<UserLanguageResolverResponse | null> => {
      const languageResponse = await loaders.language.byLanguageId.load(languageId);

      if (!languageResponse) return null;

      const { id, userId, languageEn, languageSv  } = languageResponse.languageDto

      return {
        language: {
          id,
          userId,
          languageSv,
          languageEn
        },
        statusCode: languageResponse.statusCode
      };
    }
  }
};
