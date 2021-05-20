import {
  GQLChangeEmailInput,
  GQLChangePasswordInput,
  GQLDeleteAccountInput,
  GQLLoginInput,
  GQLRefreshTokenInput,
  GQLRegisterInput,
  GQLRequestPasswordResetByEmailInput,
  GQLResetPasswordByTokenInput
} from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "../../config/api/base";
import {
  fetchDeleteAuthWithBody,
  fetchPostAuth,
  fetchPostNoAuth,
  fetchPostNoBody
} from "../../config/api/httpClient";

export const registerUser = async (input: GQLRegisterInput | undefined): Promise<any> => {
  const payload = {
    firstname: input?.firstName,
    lastname: input?.lastName,
    email: input?.email,
    password: input?.password
  };

  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/register`, "POST", payload);
};

export const loginUser = async (input: GQLLoginInput | undefined): Promise<any> => {
  const payload = {
    email: input?.email,
    password: input?.password
  };

  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/login`, "POST", payload);
};

export const logoutUser = async (authorization: string): Promise<any> => {
  return await fetchPostNoBody(`${PROGEN_BASE_URL}/user/auth/logout`, "POST", authorization);
};

export const refreshToken = async (
  authorization: string,
  input: GQLRefreshTokenInput | undefined
): Promise<any> => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/user/auth/refresh`, "POST", authorization, input);
};

export const changeEmail = async (
  authorization: string,
  input: GQLChangeEmailInput | undefined
): Promise<any> => {
  return await fetchPostAuth(
    `${PROGEN_BASE_URL}/user/auth/change-email`,
    "POST",
    authorization,
    input
  );
};

export const deleteAccount = async (
  authorization: string,
  input: GQLDeleteAccountInput | undefined
): Promise<any> => {
  return await fetchDeleteAuthWithBody(
    `${PROGEN_BASE_URL}/user/auth/delete-account`,
    "DELETE",
    authorization,
    input
  );
};

export const changePassword = async (
  authorization: string,
  input: GQLChangePasswordInput | undefined
): Promise<any> => {
  return await fetchPostAuth(
    `${PROGEN_BASE_URL}/user/auth/change-password`,
    "POST",
    authorization,
    input
  );
};

export const requestPasswordResetByEmail = async (
  input: GQLRequestPasswordResetByEmailInput | undefined
): Promise<any> => {
  return await fetchPostNoAuth(
    `${PROGEN_BASE_URL}/user/auth/request-password-reset`,
    "POST",
    input
  );
};

export const resetPasswordByTokenInParams = async (
  input: GQLResetPasswordByTokenInput | undefined
): Promise<any> => {
  const data = {
    newPassword: input?.password
  };

  return await fetchPostNoAuth(
    `${PROGEN_BASE_URL}/user/auth/reset-password-with-token/?token=${input?.token}`,
    "POST",
    data
  );
};
