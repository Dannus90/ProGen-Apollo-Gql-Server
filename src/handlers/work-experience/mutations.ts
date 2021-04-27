import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { WorkExperienceMutationRootToCreateWorkExperienceResolver } from "./../../types/TypesGraphQL";
import { Context } from "../../context";

export interface WorkExperienceMutation {
  WorkExperienceMutationRoot: {
    createWorkExperience: WorkExperienceMutationRootToCreateWorkExperienceResolver;
  };
}

export const workExperienceMutations: WorkExperienceMutation = {
  WorkExperienceMutationRoot: {
    createWorkExperience: async (_, body, { api, authorization }: Context) => {
      const response = await api.createWorkExperience(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const data = await response.json();

      const {
        workExperienceId
      } = data;

      const gqlResponse = {
        workExperienceId,
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
