import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  SkillMutationRootToCreateSkillResolver,
  GQLCreateSkillResponse,
  SkillMutationRootToDeleteSkillResolver,
  GQLDeleteSkillResponse
} from "./../../types/TypesGraphQL";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { Context } from "../../context";
export interface SkillMutation {
  SkillMutationRoot: {
    createSkill: SkillMutationRootToCreateSkillResolver;
    deleteSkill: SkillMutationRootToDeleteSkillResolver;
  };
}

export const skillMutations: SkillMutation = {
  SkillMutationRoot: {
    createSkill: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLCreateSkillResponse> => {
      const response = await api.createSkill(authorization, body.input);

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

      const { skillId } = data;

      const gqlResponse = {
        skillId,
        statusCode: response.status
      };

      return gqlResponse;
    },
    deleteSkill: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLDeleteSkillResponse> => {
      const response = await api.deleteSkill(authorization, body.input);

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

      const gqlResponse = {
        message: "Skill removed successfully",
        statusCode: response.status
      };

      return gqlResponse;
    },
  }
};
