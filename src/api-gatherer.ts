import {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
  changeEmail,
  changePassword
} from "./handlers/auth-handler/api-calls";
import { getFullUserInformation, updateUserData } from "./handlers/user-data/api-calls";
import {
  GQLChangeEmailInput,
  GQLChangePasswordInput,
  GQLLoginInput,
  GQLRefreshTokenInput,
  GQLRegisterInput,
  GQLUserDataInput
} from "./types/TypesGraphQL";

export interface GetApiMethods {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerUser: (input: GQLRegisterInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loginUser: (input: GQLLoginInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logoutUser: (authorization: string) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refreshToken: (authorization: string, input: GQLRefreshTokenInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateUserData: (authorization: string, input: GQLUserDataInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getFullUserInformation: (authorization: string) => Promise<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeEmail: (authorization: string, input: GQLChangeEmailInput | undefined) => Promise<any>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changePassword: (authorization: string, input: GQLChangePasswordInput | undefined) => Promise<any>;
}

export const getApiMethods = (): GetApiMethods => {
  return {
    registerUser,
    loginUser,
    logoutUser,
    refreshToken,
    updateUserData,
    getFullUserInformation,
    changeEmail,
    changePassword
  };
};
