import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchPutAuth } from "../../config/api/httpClient";
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
