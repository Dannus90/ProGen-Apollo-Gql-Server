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
  AuthenticationMutationRootToRefreshTokenResolver,
  AuthenticationMutationRootToRegisterUserResolver
} from "../../types/TypesGraphQL";

export interface AuthenticationMutations {
  AuthenticationMutationRoot: {
    registerUser: AuthenticationMutationRootToRegisterUserResolver;
    loginUser: AuthenticationMutationRootToLoginUserResolver;
    logoutUser: AuthenticationMutationRootToLogoutUserResolver;
    refreshToken: AuthenticationMutationRootToRefreshTokenResolver;
  };
}

export interface GqlRegisterLogoutResponse {
  statusCode: number;
  message: string;
}

export interface GqlLoginRefreshResponse {
  statusCode: number;
  accessToken: string;
  refreshToken: string;
}

export const authMutations: AuthenticationMutations = {
  AuthenticationMutationRoot: {
    registerUser: async (_, body, { api }: Context) => {
      const response = await api.registerUser(body.input);

      if (response.status !== 201) {
        const { type, statusCode, message }= await response.json();
        throw new HttpResponseError(type, statusCode, message);
      }

      const gqlResponse: GqlRegisterLogoutResponse = {
        statusCode: response.status,
        message: "Successful registration"git
      };

      return gqlResponse;
    },
    loginUser: async (_, body, { api }: Context) => {
      const response = await api.loginUser(body.input);

      if (response.status !== 200) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode, message);
      }

      const { tokenResponse } = await response.json();

      const gqlResponse: GqlLoginRefreshResponse = {
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
    refreshToken: async (_, body, { api, authorization }: Context) => {
      const response = await api.refreshToken(authorization, body.input);

      console.log()

      if (response.status !== 200) {
        const { statusCode, message, type } = await response.json()
        throw new HttpResponseError(type, statusCode, message);
      }

      const { tokenResponse } = await response.json();

      const gqlResponse: GqlLoginRefreshResponse = {
        statusCode: response.status,
        accessToken: tokenResponse.accessToken,
        refreshToken: tokenResponse.refreshToken
      };

      return gqlResponse;
    },
  }
};
