/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { HttpResponseError } from "../../config/api/error-management/http-response-error";
import { Context } from "../../context";
import {
  AuthenticationMutationRootToLoginUserResolver,
  AuthenticationMutationRootToRegisterUserResolver
} from "../../types/TypesGraphQL";

export interface AuthenticationMutations {
  AuthenticationMutationRoot: {
    registerUser: AuthenticationMutationRootToRegisterUserResolver;
    loginUser: AuthenticationMutationRootToLoginUserResolver;
  };
}

export interface GqlRegisterResponse {
  statusCode: number;
  message: string;
}

export interface GqlLoginResponse {
  accessToken: string;
  refreshToken: string;
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
    },
    loginUser: async (_, body, { api }: Context) => {
      const response = await api.loginUser(body.input);

      if (response.status !== 200) {
        const error = await response.json();
        throw new HttpResponseError(error.type, error.statusCode, error.message);
      }

      const { tokenResponse } = await response.json();

      const gqlResponse: GqlLoginResponse = {
        accessToken: tokenResponse.accessToken,
        refreshToken: tokenResponse.refreshToken
      };

      return gqlResponse;
    }
  }
};
