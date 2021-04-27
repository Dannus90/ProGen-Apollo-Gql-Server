import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchPostAuth } from "../../config/api/httpClient";
import { GQLWorkExperienceInput } from "../../types/TypesGraphQL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createWorkExperience = async (
  authorization: string,
  input: GQLWorkExperienceInput | undefined
) => {
  return await fetchPostAuth(
    `${PROGEN_BASE_URL}/user/workexperience`,
    "POST",
    authorization,
    input
  );
};