import { PROGEN_BASE_URL } from './../../config/api/base';
import { GQLCreateUserSkillInput } from "../../types/TypesGraphQL";
import { fetchGetAuth, fetchPostAuth } from './../../config/api/httpClient';

export const createUserSkill = async(
  authorization: string,
  input: GQLCreateUserSkillInput | undefined
): Promise<any> => await fetchPostAuth(`${PROGEN_BASE_URL}/user/userskill`, "POST", authorization, input);

export const getUserSkills = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/userskill`, "GET", authorization);
};
