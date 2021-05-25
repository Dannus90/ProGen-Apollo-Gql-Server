import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
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
