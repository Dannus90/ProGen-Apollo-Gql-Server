import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getUserLanguage, getUserLanguages } from "./api-calls";
import { LanguageAnswer, LanguagesAnswer } from "./api-types";

export interface LanguageDataLoaders {
  byLanguageId: DataLoader<string, LanguageAnswer | undefined>;
  allLanguagesByUserIdInClaims: DataLoader<string, LanguagesAnswer | undefined>;
}

export const createLanguageDataLoaders = (authorization: string): LanguageDataLoaders => {
  const byLanguageId = new DataLoader<string, LanguageAnswer | undefined>(async (ids) => {
    const languages = await Promise.all(
      ids.map(async (id) => {
        const response = await getUserLanguage(authorization, id);
        if (response.status === 401) {
          const { status, statusText } = response;
          throw new HttpResponseError(statusText, status, statusText);
        } else if (!statusCodeChecker(response.status)) {
          const { type, statusCode, message, errors } = await response.json();

          let errorOutput = [""];

          if (errors) {
            errorOutput = Object.keys(errors).map((err) => {
              return errors[err];
            });
          }

          throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
        }

        const otherInformation: LanguageAnswer = await response.json();
        otherInformation.statusCode = response.status;
        return otherInformation;
      })
    );

    return ids.map((id) => {
      return languages.find((l) => l.languageDto.id === id);
    });
  });
  const allLanguagesByUserIdInClaims = new DataLoader<string, LanguagesAnswer | undefined>(
    async (ids) => {
      return await Promise.all(
        ids.map(async () => {
          const response = await getUserLanguages(authorization);

          if (response.status === 401) {
            const { status, statusText } = response;
            throw new HttpResponseError(statusText, status, statusText);
          } else if (!statusCodeChecker(response.status)) {
            const { type, statusCode, message, errors } = await response.json();

            let errorOutput = [""];

            if (errors) {
              errorOutput = Object.keys(errors).map((err) => {
                return errors[err];
              });
            }

            throw new HttpResponseError(
              type,
              statusCode ?? response.status,
              message ?? errorOutput
            );
          }

          const languages: LanguagesAnswer = await response.json();
          languages.statusCode = response.status;

          return languages;
        })
      );
    }
  );

  return {
    byLanguageId,
    allLanguagesByUserIdInClaims
  };
};
