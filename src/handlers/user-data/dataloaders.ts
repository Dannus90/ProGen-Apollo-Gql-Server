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
      const response = await getFullUserInformation(authorization);

      if (response.status === 401) {
        const { status, statusText } = response;
        throw new HttpResponseError(statusText, status, statusText);
      } else if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode, message);
      }

      const userDataList = await response.json();

      return ids.map((id) => {
        userDataList.fullUserInformationDto.statusCode = response.status;
        return userDataList;
      });
    }
  );

  return {
    byUserIdFromClaims
  };
};
