import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { UserPresentationMutationRootToUpdateUserPresentationResolver } from "./../../types/TypesGraphQL";
import { Context } from "../../context";
import { parseJson } from "../../config/api/helpers/parse-helper";

export interface UserPresentationMutations {
  UserPresentationMutationRoot: {
    updateUserPresentation: UserPresentationMutationRootToUpdateUserPresentationResolver;
  };
}

export const userPresentationMutations: UserPresentationMutations = {
  UserPresentationMutationRoot: {
    updateUserPresentation: async (_, body, { api, authorization }: Context) => {
      const response = await api.updateUserPresentationData(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const res = await parseJson(response);

        if(res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
        }        
      }

      const data = await response.json();

      const {
        id,
        userId,
        presentationSv,
        presentationEn,
        createdAt,
        updatedAt
      } = data.userPresentationData;

      const gqlResponse = {
        userPresentation: {
          id: id,
          userId: userId,
          presentationSv,
          presentationEn,
          createdAt: createdAt,
          updatedAt: updatedAt
        },
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
