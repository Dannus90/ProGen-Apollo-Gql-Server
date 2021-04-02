import { registerUser } from "./handlers/auth-handler/api-calls";
import { GQLRegisterLoginInput } from "./types/TypesGraphQL";

export interface GetApiMethods {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerUser: (input: GQLRegisterLoginInput | undefined) => Promise<any>;
}

export const getApiMethods = (): GetApiMethods => {
  return {
    registerUser
  };
};
