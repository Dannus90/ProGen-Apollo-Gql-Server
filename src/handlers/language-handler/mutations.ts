import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  LanguageMutationRootToCreateLanguageResolver,
  LanguageMutationRootToDeleteLanguageResolver,
  LanguageMutationRootToUpdateLanguageResolver
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";

export interface LanguageMutations {
  LanguageMutationRoot: {
    createLanguage: LanguageMutationRootToCreateLanguageResolver;
    updateLanguage: LanguageMutationRootToUpdateLanguageResolver;
    deleteLanguage: LanguageMutationRootToDeleteLanguageResolver;
  };
}

export const languageMutations: LanguageMutations = {
  LanguageMutationRoot: {
    createLanguage: async (_, body, { api, authorization }: Context) => {
      const response = await api.createLanguage(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const data = await response.json();

      const { languageId } = data;

      const gqlResponse = {
        languageId,
        statusCode: response.status
      };

      return gqlResponse;
    },
    updateLanguage: async (_, body, { api, authorization }: Context) => {
      const response = await api.updateLanguage(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const data = await response.json();

      const { languageId } = data;

      const gqlResponse = {
        languageId,
        statusCode: response.status
      };

      return gqlResponse;
    },
    deleteLanguage: async (_, body, { api, authorization }: Context) => {
      const response = await api.deleteLanguage(authorization, body.input.languageId);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const data = await response.json();

      const { languageId } = data;

      const gqlResponse = {
        languageId,
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
