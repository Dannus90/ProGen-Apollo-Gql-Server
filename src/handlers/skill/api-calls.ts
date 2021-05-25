import { GQLCreateSkillInput } from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "./../../config/api/base";
import { fetchPostAuth } from "./../../config/api/httpClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createSkill = async (
  authorization: string,
  input: GQLCreateSkillInput | undefined
) => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/general/skill`, "POST", authorization, input);
};