import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { getFullUserInformation } from "./api-calls";
import { UserInformationResponse } from "./api-types";

export interface UserDataLoaders {
  byUserIdFromClaims: DataLoader<string, UserInformationResponse | undefined>;
}

export const createUserDataLoaders = (authorization: string): UserDataLoaders => {
  const byUserIdFromClaims = new DataLoader<string, UserInformationResponse | undefined>(
    async (ids) => {
      const userInformations = await Promise.all(
        ids.map(async () => {
          const response = await getFullUserInformation(authorization);

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

          const userInformation = await response.json();
          userInformation.fullUserInformationDto.statusCode = response.status;

          return userInformation;
        })
      );

      return ids.map(() => {
        return userInformations[0];
      });
    }
  );

  return {
    byUserIdFromClaims
  };
};
