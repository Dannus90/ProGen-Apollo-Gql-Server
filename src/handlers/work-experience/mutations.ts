import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  WorkExperienceMutationRootToCreateWorkExperienceResolver,
  WorkExperienceMutationRootToDeleteWorkExperienceResolver,
  WorkExperienceMutationRootToUpdateWorkExperienceResolver
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";

export interface WorkExperienceMutation {
  WorkExperienceMutationRoot: {
    createWorkExperience: WorkExperienceMutationRootToCreateWorkExperienceResolver;
    updateWorkExperience: WorkExperienceMutationRootToUpdateWorkExperienceResolver;
    deleteWorkExperience: WorkExperienceMutationRootToDeleteWorkExperienceResolver;
  };
}

export const workExperienceMutations: WorkExperienceMutation = {
  WorkExperienceMutationRoot: {
    createWorkExperience: async (_, body, { api, authorization }: Context) => {
      const response = await api.createWorkExperience(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message, errors } = await response.json();
        
        const errorOutput = Object.keys(errors).map((err) => {
          return errors[err];
        })

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      const data = await response.json();

      const { workExperienceId } = data;

      const gqlResponse = {
        workExperienceId,
        statusCode: response.status
      };

      return gqlResponse;
    },
    updateWorkExperience: async (_, body, { api, authorization }: Context) => {
      const response = await api.updateWorkExperience(
        authorization,
        body.input?.workExperienceId,
        body.input
      );

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message, errors } = await response.json();

        const errorOutput = Object.keys(errors).map((err) => {
          return errors[err];
        })

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      const data = await response.json();

      const gqlResponse = {
        workExperience: {
          ...data.workExperienceDto,
          statusCode: response.status
        }
      };

      return gqlResponse;
    },
    deleteWorkExperience: async (_, body, { api, authorization }: Context) => {
      const response = await api.deleteWorkExperience(authorization, body.input.workExperienceId);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message, errors } = await response.json();

        const errorOutput = Object.keys(errors).map((err) => {
          return errors[err];
        })

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      return {
        workExperienceId: body.input?.workExperienceId ?? "",
        statusCode: response.status
      };
    }
  }
};
