import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  GQLCreateUserSkillResponse,
  UserSkillMutationRootToCreateUserSkillResolver
} from "./../../types/TypesGraphQL";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { Context } from "../../context";
export interface UserSkillMutations {
  UserSkillMutationRoot: {
    createUserSkill: UserSkillMutationRootToCreateUserSkillResolver;
  };
}

export const userSkillMutations: UserSkillMutations = {
  UserSkillMutationRoot: {
    createUserSkill: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLCreateUserSkillResponse> => {
      const response = await api.createUserSkill(authorization, body.input);

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

      const { userSkillId } = data;

      const gqlResponse = {
        userSkillId,
        statusCode: response.status
      };

      return gqlResponse;
    },
  }
};
