import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getFullCvInformation } from "./api-calls";
import { FullCvInformationResponse } from "./api-types";

export interface FullCvInformationDataLoaders {
  byUserIdInClaims: DataLoader<string, FullCvInformationResponse | undefined>;
}

export const createFullCvInformationDataLoaders = (
  authorization: string
): FullCvInformationDataLoaders => {
  const byUserIdInClaims = new DataLoader<string, FullCvInformationResponse | undefined>(
    async (ids) => {
      const fullCvInformations = await Promise.all(
        ids.map(async () => {
          const response = await getFullCvInformation(authorization);
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

          const otherInformation: FullCvInformationResponse = await response.json();
          otherInformation.statusCode = response.status;
          return otherInformation;
        })
      );

      return ids.map(() => {
        return fullCvInformations[0];
      });
    }
  );

  return {
    byUserIdInClaims
  };
};
