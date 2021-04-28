import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
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

          if (response.status === 401) {
            const { status, statusText } = response;
            throw new HttpResponseError(statusText, status, statusText);
          } else if (!statusCodeChecker(response.status)) {
            const { type, statusCode, message } = await response.json();
            throw new HttpResponseError(type, statusCode, message);
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
