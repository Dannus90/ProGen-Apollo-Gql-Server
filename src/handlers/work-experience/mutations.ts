import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { UserPresentationMutationRootToUpdateUserPresentationResolver } from "./../../types/TypesGraphQL";
import { Context } from "../../context";

export interface WorkExperienceMutation {
  WorkExperienceMutationRoot: {
    createWorkExperience: UserPresentationMutationRootToUpdateUserPresentationResolver;
  };
}

export const userPresentationMutations: WorkExperienceMutation = {
  WorkExperienceMutationRoot: {
    createWorkExperience: async (_, body, { api, authorization }: Context) => {
      const response = await api.updateUserPresentationData(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode, message);
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
