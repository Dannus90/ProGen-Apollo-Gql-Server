import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  EducationMutationRootToCreateEducationResolver,
  EducationMutationRootToDeleteEducationResolver,
  EducationMutationRootToUpdateEducationResolver,
  GQLCreateEducationResponse
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";
import { parseJson } from "../../config/api/helpers/parse-helper";
export interface EducationMutation {
  EducationMutationRoot: {
    createEducation: EducationMutationRootToCreateEducationResolver;
    updateEducation: EducationMutationRootToUpdateEducationResolver;
    deleteEducation: EducationMutationRootToDeleteEducationResolver;
  };
}

export const educationMutations: EducationMutation = {
  EducationMutationRoot: {
    createEducation: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLCreateEducationResponse> => {
      const response = await api.createEducation(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const res = await parseJson(response);

        if (res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(
            response.type,
            response.status,
            response.message ?? response.statusText ?? "Unspecified Error"
          );
        }
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
      const response = await api.updateEducation(authorization, body.input.educationId, body.input);

      if (!statusCodeChecker(response.status)) {
        const res = await parseJson(response);

        if (res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(
            response.type,
            response.status,
            response.message ?? response.statusText ?? "Unspecified Error"
          );
        }
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
        const res = await parseJson(response);

        if (res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(
            response.type,
            response.status,
            response.message ?? response.statusText ?? "Unspecified Error"
          );
        }
      }

      return {
        educationId: body.input?.educationId,
        statusCode: response.status
      };
    }
  }
};
