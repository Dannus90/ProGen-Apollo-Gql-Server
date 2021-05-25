import { GQLCreateSkillInput } from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "./../../config/api/base";
import { fetchGetAuth, fetchPostAuth } from "./../../config/api/httpClient";

export const createSkill = async <T>(
  authorization: string,
  input: GQLCreateSkillInput | undefined
): Promise<any> => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/general/skill`, "POST", authorization, input);
};

export const getSkills = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/general/skill`, "GET", authorization);
};