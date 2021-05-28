import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { getFullCvInformation } from "./api-calls";
import { FullCvInformationResponse } from "./api-types";

export interface FullCvInformationDataLoaders {
  byUserIdInClaims: DataLoader<string, FullCvInformationResponse>;
}

export const createFullCvInformationDataLoaders = (
  authorization: string
): FullCvInformationDataLoaders => {
  const byUserIdInClaims = new DataLoader<string, FullCvInformationResponse>(async (ids) => {
    const fullCvInformations = await Promise.all(
      ids.map(async () => {
        const response = await getFullCvInformation(authorization);
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

        const otherInformation: FullCvInformationResponse = await response.json();
        otherInformation.statusCode = response.status;
        return otherInformation;
      })
    );

    return ids.map(() => {
      return fullCvInformations[0];
    });
  });

  return {
    byUserIdInClaims
  };
};
