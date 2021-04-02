/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { HttpResponseError } from "../../config/api/error-management/http-response-error";
import { Context } from "../../context";
import { AuthenticationMutationRootToRegisterUserResolver } from "../../types/TypesGraphQL";

export interface AuthenticationMutations {
  AuthenticationMutationRoot: {
    registerUser: AuthenticationMutationRootToRegisterUserResolver;
  };
}

export interface GqlRegisterResponse {
  statusCode: number;
  message: string;
}

export const authMutations: AuthenticationMutations = {
  AuthenticationMutationRoot: {
    registerUser: async (_, body, { api }: Context) => {
      const response = await api.registerUser(body.input);

      if (response.status !== 201) {
        const error = await response.json();
        throw new HttpResponseError(error.type, error.statusCode, error.message);
      }

      const gqlResponse: GqlRegisterResponse = {
        statusCode: response.status,
        message: "Successful registration"
      };

      return gqlResponse;
    }
  }
};
