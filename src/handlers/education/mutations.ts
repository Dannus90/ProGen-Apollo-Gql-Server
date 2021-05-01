import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  EducationMutationRootToCreateEducationResolver, GQLCreateEducationResponse
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";
export interface EducationMutation {
  EducationMutationRoot: {
    createEducation: EducationMutationRootToCreateEducationResolver;
  };
}

export const educationMutations: EducationMutation = {
  EducationMutationRoot: {
    createEducation: async (_, body, { api, authorization }: Context): Promise<GQLCreateEducationResponse> => {
      const response = await api.createEducation(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message, errors } = await response.json();
        
        const errorOutput = Object.keys(errors).map((err) => {
          return errors[err];
        })

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      const data = await response.json();

      const { educationId } = data;

      const gqlResponse = {
        educationId,
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
