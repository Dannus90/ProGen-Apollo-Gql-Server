import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchGetAuth, fetchPutAuth } from "../../config/api/httpClient";
import { GQLOtherInformationInput } from "../../types/TypesGraphQL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getOtherInformation = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/otherinformation`, "GET", authorization);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateOtherInformation = async (
  authorization: string,
  input: GQLOtherInformationInput | undefined
) => {
  return await fetchPutAuth(
    `${PROGEN_BASE_URL}/user/otherinformation`,
    "PUT",
    authorization,
    input
  );
};
