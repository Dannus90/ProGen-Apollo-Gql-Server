import {
  GQLChangeEmailInput,
  GQLChangePasswordInput,
  GQLLoginInput,
  GQLRefreshTokenInput,
  GQLRegisterInput
} from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchPostAuth, fetchPostNoAuth, fetchPostNoBody } from "../../config/api/httpClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUser = async (input: GQLRegisterInput | undefined): Promise<any> => {
  const payload = {
    firstname: input?.firstName,
    lastname: input?.lastName,
    email: input?.email,
    password: input?.password
  };

  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/register`, "POST", payload);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginUser = async (input: GQLLoginInput | undefined): Promise<any> => {
  const payload = {
    email: input?.email,
    password: input?.password
  };

  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/login`, "POST", payload);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logoutUser = async (authorization: string): Promise<any> => {
  return await fetchPostNoBody(`${PROGEN_BASE_URL}/user/auth/logout`, "POST", authorization);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const refreshToken = async (
  authorization: string,
  input: GQLRefreshTokenInput | undefined
): Promise<any> => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/user/auth/refresh`, "POST", authorization, input);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
