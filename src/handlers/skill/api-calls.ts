import { GQLCreateSkillInput, GQLDeleteSkillInput } from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "./../../config/api/base";
import { fetchDeleteAuth, fetchGetAuth, fetchPostAuth } from "./../../config/api/httpClient";

export const createSkill = async (
  authorization: string,
  input: GQLCreateSkillInput | undefined
): Promise<any> => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/general/skill`, "POST", authorization, input);
};

export const getSkills = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/general/skill`, "GET", authorization);
};

export const deleteSkill = async (
  authorization: string,
  input: GQLDeleteSkillInput
): Promise<any> => {
  return await fetchDeleteAuth(
    `${PROGEN_BASE_URL}/general/skill/${input.skillId}`,
    "DELETE",
    authorization
  );
};
