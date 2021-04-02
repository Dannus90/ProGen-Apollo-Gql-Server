import { registerUser, loginUser, logoutUser, refreshToken } from "./handlers/auth-handler/api-calls";
import { GQLRegisterLoginInput, GQLRefreshTokenInput } from "./types/TypesGraphQL";

export interface GetApiMethods {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerUser: (input: GQLRegisterLoginInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loginUser: (input: GQLRegisterLoginInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logoutUser: (authorization: string) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refreshToken: (uthorization: string, input: GQLRefreshTokenInput | undefined) => Promise<any>;
}

export const getApiMethods = (): GetApiMethods => {
  return {
    registerUser,
    loginUser,
    logoutUser,
    refreshToken
  };
};
