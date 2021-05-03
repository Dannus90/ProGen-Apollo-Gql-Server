import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  EducationMutationRootToCreateEducationResolver, EducationMutationRootToDeleteEducationResolver, EducationMutationRootToUpdateEducationResolver, GQLCreateEducationResponse
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";
export interface EducationMutation {
  EducationMutationRoot: {
    createEducation: EducationMutationRootToCreateEducationResolver;
    updateEducation: EducationMutationRootToUpdateEducationResolver;
    deleteEducation: EducationMutationRootToDeleteEducationResolver;
  };
}

export const educationMutations: EducationMutation = {
  EducationMutationRoot: {
    createEducation: async (_, body, { api, authorization }: Context): Promise<GQLCreateEducationResponse> => {
      const response = await api.createEducation(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message, errors } = await response.json();

        let errorOutput = ["Unspecified error"];
        
        if(errors) {
          errorOutput = Object.keys(errors).map((err) => {
            return errors[err];
          })
      }

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      const data = await response.json();

      const { educationId } = data;

      const gqlResponse = {
        educationId,
        statusCode: response.status
      };

      return gqlResponse;
    },  
    updateEducation: async (_, body, { api, authorization }: Context) => {
      const response = await api.updateEducation(
        authorization,
        body.input.educationId,
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
        statusCode: response.status,
        education: {
          ...data.educationDto
        }
      };

      return gqlResponse;
    },
    deleteEducation: async (_, body, { api, authorization }: Context) => {
      const response = await api.deleteEducation(authorization, body.input.educationId);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message, errors } = await response.json();

        const errorOutput = Object.keys(errors).map((err) => {
          return errors[err];
        })

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      return {
        educationId: body.input?.educationId,
        statusCode: response.status
      };
    }
  }
};
