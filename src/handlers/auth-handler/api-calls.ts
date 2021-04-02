import { GQLRegisterLoginInput } from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchPostNoAuth } from "../../config/api/httpClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUser = async (input: GQLRegisterLoginInput | undefined): Promise<any> => {
  const payload = {
    email: input?.email,
    password: input?.password
  };

  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/register`, "POST", payload);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginUser = async (input: GQLRegisterLoginInput | undefined): Promise<any> => {
  const payload = {
    email: input?.email,
    password: input?.password
  };

  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/login`, "POST", payload);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logoutUser = async (authorization: string): Promise<any> => {
  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/logout`, "POST", authorization);
};
