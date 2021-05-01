import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchPostAuth } from "../../config/api/httpClient";
import { GQLCreateEducationInput } from "../../types/TypesGraphQL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createEducation = async (
  authorization: string,
  input: GQLCreateEducationInput | undefined
) => {
  return await fetchPostAuth(
    `${PROGEN_BASE_URL}/user/education`,
    "POST",
    authorization,
    input
  );
};