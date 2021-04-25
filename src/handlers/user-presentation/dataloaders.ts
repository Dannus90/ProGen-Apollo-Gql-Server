import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getUserPresentation } from "./api-calls";
import { UserPresentationResponse } from "./api-types";

export interface UserPresentationDataLoaders {
  byUserIdFromClaims: DataLoader<string, UserPresentationResponse>;
}

export const createUserPresentationDataLoaders = (authorization: string): UserPresentationDataLoaders => {
  const byUserIdFromClaims = new DataLoader<string, UserPresentationResponse>(
    async (ids) => {
      const response = await getUserPresentation(authorization);

      if (response.status === 401) {
        const { status, statusText } = response;
        throw new HttpResponseError(statusText, status, statusText);
      } else if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode, message);
      }

      const data = await response.json();

      return ids.map((id) => {
        data.statusCode = response.status;
        return data;
      });
    }
  );

  return {
    byUserIdFromClaims
  };
};