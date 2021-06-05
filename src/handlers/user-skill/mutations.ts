import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  GQLCreateUserSkillResponse,
  GQLDeleteUserSkillResponse,
  GQLUpdateUserSkillResponse,
  UserSkillMutationRootToCreateUserSkillResolver,
  UserSkillMutationRootToDeleteUserSkillResolver,
  UserSkillMutationRootToUpdateUserSkillResolver
} from "./../../types/TypesGraphQL";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { Context } from "../../context";
export interface UserSkillMutations {
  UserSkillMutationRoot: {
    createUserSkill: UserSkillMutationRootToCreateUserSkillResolver;
    deleteUserSkill: UserSkillMutationRootToDeleteUserSkillResolver;
    updateUserSkill: UserSkillMutationRootToUpdateUserSkillResolver;
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

        let errors = "";
        if (res?.errors) {
          const keys = Object.keys(res.errors);
          keys.forEach((k) => {
            errors += (res.errors?.[k] as string) ?? "";
          });
        }

        if (errors.includes("skillId")) {
          errors = "Please choose a skill to add as userskill";
        }

        if (res) {
          if (res.statusCode === 409) {
            throw new HttpResponseError(
              res.type,
              res.statusCode ?? response.status,
              "User skill already exist"
            );
          }

          throw new HttpResponseError(
            res.type,
            res.statusCode ?? response.status,
            res.message ?? errors
          );
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
    deleteUserSkill: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLDeleteUserSkillResponse> => {
      const response = await api.deleteUserSkill(authorization, body.input);

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
    updateUserSkill: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLUpdateUserSkillResponse> => {
      const response = await api.updateUserSkill(authorization, body.input);

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

      return {
        statusCode: response.status,
        userSkillId: data?.userSkillId ?? ""
      };
    }
  }
};
