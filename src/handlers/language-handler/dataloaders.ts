import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getUserLanguage } from "./api-calls";
import { LanguageAnswer } from "./api-types";

export interface LanguageDataLoaders {
  byLanguageId: DataLoader<string, LanguageAnswer | undefined>;
}

export const createLanguageDataLoaders = (
  authorization: string
): LanguageDataLoaders => {
  const byLanguageId = new DataLoader<string, LanguageAnswer | undefined>(
    async (ids) => {
      const languages = await Promise.all(
        ids.map(async (id) => {
          const response = await getUserLanguage(authorization, id);
          if (response.status === 401) {
            const { status, statusText } = response;
            throw new HttpResponseError(statusText, status, statusText);
          } else if (!statusCodeChecker(response.status)) {
            const { type, statusCode, message, errors } = await response.json();

            const errorOutput = Object.keys(errors).map((err) => {
              return errors[err];
            });

            throw new HttpResponseError(
              type,
              statusCode ?? response.status,
              message ?? errorOutput
            );
          }

          const otherInformation: LanguageAnswer = await response.json();
          otherInformation.statusCode = response.status;
          return otherInformation;
        })
      );

      return ids.map((id) => {
        return languages.find((l) => l.id === id)
      });
    }
  );

  return {
    byLanguageId
  };
};
