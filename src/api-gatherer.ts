import { registerUser } from "./handlers/auth-handler/api-calls";

export interface GetApiMethods {
  registerUser: Function;
}

export const getApiMethods = (): GetApiMethods => {
  return {
    registerUser,
  };
};
