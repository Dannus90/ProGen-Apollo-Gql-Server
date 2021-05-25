import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { getUserPresentation } from "./api-calls";
import { UserPresentationResponse } from "./api-types";

export interface UserPresentationDataLoaders {
  byUserIdFromClaims: DataLoader<string, UserPresentationResponse>;
}

export const createUserPresentationDataLoaders = (
  authorization: string
): UserPresentationDataLoaders => {
  const byUserIdFromClaims = new DataLoader<string, UserPresentationResponse>(async (ids) => {
    const userPresentations = await Promise.all(
      ids.map(async () => {
        const response = await getUserPresentation(authorization);

        if (!statusCodeChecker(response.status)) {
          const res = await parseJson(response);
  
          if(res) {
            throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
          } else {
            throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
          }        
        }

        const userPresentation = await response.json();
        userPresentation.statusCode = response.status;

        return userPresentation;
      })
    );

    return ids.map(() => {
      return userPresentations[0];
    });
  });

  return {
    byUserIdFromClaims
  };
};
