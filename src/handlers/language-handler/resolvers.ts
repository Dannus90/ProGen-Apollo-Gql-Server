import { GQLLanguage } from "../../types/TypesGraphQL";
import { Context } from "./../../context";

export interface UserLanguageResolverResponse {
  language: GQLLanguage;
  statusCode: number;
}

export interface UserLanguagesResolverResponse {
  languages: Array<GQLLanguage>;
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
    },
    getLanguages: async (
      _,
      __,
      { loaders }: Context
    ): Promise<UserLanguagesResolverResponse | null> => {
      const languagesResponse = await loaders.language.allLanguagesByUserIdInClaims.load("LoadAllByUserIdInClaims");

      if (!languagesResponse) return null;

      const { languageDtos, statusCode } = languagesResponse

      return {
        languages: languageDtos,
        statusCode
      };
    }
  }
};
