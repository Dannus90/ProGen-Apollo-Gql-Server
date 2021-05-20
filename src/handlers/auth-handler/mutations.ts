import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { Context } from "../../context";
import {
  AuthenticationMutationRootToChangeEmailResolver,
  AuthenticationMutationRootToChangePasswordResolver,
  AuthenticationMutationRootToDeleteAccountResolver,
  AuthenticationMutationRootToLoginUserResolver,
  AuthenticationMutationRootToLogoutUserResolver,
  AuthenticationMutationRootToRefreshTokenResolver,
  AuthenticationMutationRootToRegisterUserResolver,
  AuthenticationMutationRootToRequestPasswordResetByEmailResolver,
  AuthenticationMutationRootToResetPasswordByTokenResolver
} from "../../types/TypesGraphQL";

export interface AuthenticationMutations {
  AuthenticationMutationRoot: {
    registerUser: AuthenticationMutationRootToRegisterUserResolver;
    loginUser: AuthenticationMutationRootToLoginUserResolver;
    logoutUser: AuthenticationMutationRootToLogoutUserResolver;
    refreshToken: AuthenticationMutationRootToRefreshTokenResolver;
    changeEmail: AuthenticationMutationRootToChangeEmailResolver;
    changePassword: AuthenticationMutationRootToChangePasswordResolver;
    deleteAccount: AuthenticationMutationRootToDeleteAccountResolver;
    requestPasswordResetByEmail: AuthenticationMutationRootToRequestPasswordResetByEmailResolver;
    resetPasswordByToken: AuthenticationMutationRootToResetPasswordByTokenResolver;
  };
}

export interface GQLGeneralResponse {
  statusCode: number;
  message: string;
}

export interface GQLLoginRefreshResponse {
  statusCode: number;
  accessToken: string;
  refreshToken: string;
}

export const authMutations: AuthenticationMutations = {
  AuthenticationMutationRoot: {
    registerUser: async (_, body, { api }: Context) => {
      const response = await api.registerUser(body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode, message);
      }

      const gqlResponse: GQLGeneralResponse = {
        statusCode: response.status,
        message: "Successful registration"
      };

      return gqlResponse;
    },
    loginUser: async (_, body, { api }: Context) => {
      const response = await api.loginUser(body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const { tokenResponse } = await response.json();

      const gqlResponse: GQLLoginRefreshResponse = {
        statusCode: response.status,
        accessToken: tokenResponse.accessToken,
        refreshToken: tokenResponse.refreshToken
      };

      return gqlResponse;
    },
    logoutUser: async (_, __, { api, authorization }: Context) => {
      const response = await api.logoutUser(authorization);

      if (!statusCodeChecker(response.status)) {
        throw new HttpResponseError(response.statusText, response.status, response.statusText);
      }

      const gqlResponse: GQLGeneralResponse = {
        statusCode: response.status,
        message: "Successful logout"
      };

      return gqlResponse;
    },
    refreshToken: async (_, body, { api, authorization }: Context) => {
      const response = await api.refreshToken(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { statusCode, message, type } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const { tokenResponse } = await response.json();

      const gqlResponse: GQLLoginRefreshResponse = {
        statusCode: response.status,
        accessToken: tokenResponse.accessToken,
        refreshToken: tokenResponse.refreshToken
      };

      return gqlResponse;
    },
    changeEmail: async (_, body, { api, authorization }: Context) => {
      const response = await api.changeEmail(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { statusCode, message, type } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const gqlResponse: GQLGeneralResponse = {
        statusCode: response.status,
        message: "Email updated"
      };

      return gqlResponse;
    },
    changePassword: async (_, body, { api, authorization }: Context) => {
      const response = await api.changePassword(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { statusCode, message, type } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const gqlResponse: GQLGeneralResponse = {
        statusCode: response.status,
        message: "Password updated"
      };

      return gqlResponse;
    },
    deleteAccount: async (_, body, { api, authorization }: Context) => {
      const response = await api.deleteAccount(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { statusCode, message, type } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const gqlResponse: GQLGeneralResponse = {
        statusCode: response.status,
        message: "User deleted successfully"
      };

      return gqlResponse;
    },
    requestPasswordResetByEmail: async (_, body, { api }: Context) => {
      const response = await api.requestPasswordResetByEmail({ email: body.input?.email ?? "" });

      if (!statusCodeChecker(response.status)) {
        const { statusCode, message, type } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const gqlResponse: GQLGeneralResponse = {
        statusCode: response.status,
        message: "Check your email for your reset password link"
      };

      return gqlResponse;
    },
    resetPasswordByToken: async (_, body, { api }: Context) => {
      const response = await api.resetPasswordByTokenInParams(body.input);

      if (!statusCodeChecker(response.status)) {
        const { statusCode, message, type } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const gqlResponse: GQLGeneralResponse = {
        statusCode: response.status,
        message: "Check your email for your reset password link"
      };

      return gqlResponse;
    }
  }
};
