import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
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
        if (!statusCodeChecker(response.status)) {
          const res = await parseJson(response);

          if (res) {
            throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
          } else {
            throw new HttpResponseError(
              response.type,
              response.status,
              response.message ?? response.statusText ?? "Unspecified Error"
            );
          }
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

          if (!statusCodeChecker(response.status)) {
            const res = await parseJson(response);

            if (res) {
              throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
            } else {
              throw new HttpResponseError(
                response.type,
                response.status,
                response.message ?? response.statusText ?? "Unspecified Error"
              );
            }
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
