import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getOtherInformation } from "./api-calls";
import { OtherInformationAnswer } from "./api-types";

export interface OtherInformationDataLoaders {
  byUserIdFromClaims: DataLoader<string, OtherInformationAnswer | undefined>;
}

export const createOtherInformationDataLoaders = (
  authorization: string
): OtherInformationDataLoaders => {
  const byUserIdFromClaims = new DataLoader<string, OtherInformationAnswer | undefined>(
    async (ids) => {
      const otherInformations = await Promise.all(
        ids.map(async () => {
          const response = await getOtherInformation(authorization);
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

          const otherInformation: OtherInformationAnswer = await response.json();
          otherInformation.otherInformationDto.statusCode = response.status;
          return otherInformation;
        })
      );

      return ids.map(() => {
        return otherInformations[0];
      });
    }
  );

  return {
    byUserIdFromClaims
  };
};
