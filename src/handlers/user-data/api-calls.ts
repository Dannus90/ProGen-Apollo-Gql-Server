import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchGetAuth, fetchPutAuth } from "../../config/api/httpClient";
import { GQLUserDataInput } from "../../types/TypesGraphQL";
import { UpdateUserDataResponse } from "./mutations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFullUserInformation = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/userData`, "GET", authorization);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateUserData = async (
  authorization: string,
  input: GQLUserDataInput | undefined
) => {
  return await fetchPutAuth(`${PROGEN_BASE_URL}/user/userData`, "PUT", authorization, input);
};
