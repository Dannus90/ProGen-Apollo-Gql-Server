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
  AuthenticationMutationRootToLogoutUserResolver,
  AuthenticationMutationRootToRegisterUserResolver
} from "../../types/TypesGraphQL";

export interface AuthenticationMutations {
  AuthenticationMutationRoot: {
    registerUser: AuthenticationMutationRootToRegisterUserResolver;
    loginUser: AuthenticationMutationRootToLoginUserResolver;
    logoutUser: AuthenticationMutationRootToLogoutUserResolver;
  };
}

export interface GqlRegisterLogoutResponse {
  statusCode: number;
  message: string;
}

export interface GqlLoginResponse {
  statusCode: number;
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

      const gqlResponse: GqlRegisterLogoutResponse = {
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
        statusCode: response.status,
        accessToken: tokenResponse.accessToken,
        refreshToken: tokenResponse.refreshToken
      };

      return gqlResponse;
    },
    logoutUser: async (_, body, { api, authorization }: Context) => {
      const response = await api.logoutUser(authorization);

      if (response.status !== 204) {
        throw new HttpResponseError(response.statusText, response.status, response.statusText);
      }

      const gqlResponse: GqlRegisterLogoutResponse = {
        statusCode: response.status,
        message: "Successful logout"
      };

      return gqlResponse;
    },
  }
};
