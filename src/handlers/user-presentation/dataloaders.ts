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

export const createUserPresentationDataLoaders = (
  authorization: string
): UserPresentationDataLoaders => {
  const byUserIdFromClaims = new DataLoader<string, UserPresentationResponse>(async (ids) => {
    const userPresentations = await Promise.all(ids.map(async (id) => {
      const response = await getUserPresentation(authorization);

      if (response.status === 401) {
        const { status, statusText } = response;
        throw new HttpResponseError(statusText, status, statusText);
      } else if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode, message);
      }

      const userPresentation = await response.json();
      userPresentation.statusCode = response.status

      return userPresentation;
    }))

    return ids.map((id) => {
      return userPresentations[0];
    });
  });

  return {
    byUserIdFromClaims
  };
};
