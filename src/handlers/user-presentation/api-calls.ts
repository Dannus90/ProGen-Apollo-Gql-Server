import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchGetAuth, fetchPutAuth } from "../../config/api/httpClient";
import { GQLUserPresentationInput } from "../../types/TypesGraphQL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateUserPresentationData = async (
  authorization: string,
  input: GQLUserPresentationInput | undefined
) => {
  return await fetchPutAuth(
    `${PROGEN_BASE_URL}/user/userpresentation`,
    "PUT",
    authorization,
    input
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserPresentation = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/userpresentation`, "GET", authorization);
};