import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  WorkExperienceMutationRootToCreateWorkExperienceResolver,
  WorkExperienceMutationRootToUpdateWorkExperienceResolver
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";

export interface WorkExperienceMutation {
  WorkExperienceMutationRoot: {
    createWorkExperience: WorkExperienceMutationRootToCreateWorkExperienceResolver;
    updateWorkExperience: WorkExperienceMutationRootToUpdateWorkExperienceResolver;
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
        body.input?.workExperienceInput
      );

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const data = await response.json();

      const {
        id,
        userId,
        employmentRate,
        companyName,
        roleSv,
        roleEn,
        descriptionSv,
        descriptionEn,
        citySv,
        cityEn,
        countrySv,
        countryEn,
        dateStarted,
        dateEnded,
        createdAt,
        updatedAt
      } = data.workExperienceDto;

      const gqlResponse = {
        workExperience: {
          id,
          userId,
          employmentRate,
          companyName,
          roleSv,
          roleEn,
          descriptionSv,
          descriptionEn,
          citySv,
          cityEn,
          countrySv,
          countryEn,
          dateStarted,
          dateEnded,
          createdAt,
          updatedAt
        }
      };

      return gqlResponse;
    }
  }
};
