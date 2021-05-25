import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  SkillMutationRootToCreateSkillResolver,
  GQLCreateSkillResponse
} from "./../../types/TypesGraphQL";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { Context } from "../../context";
export interface SkillMutation {
  SkillMutationRoot: {
    createSkill: SkillMutationRootToCreateSkillResolver;
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

        if(res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
        }        
      }

      const data = await response.json();

      const { skillId } = data;

      const gqlResponse = {
        skillId,
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
