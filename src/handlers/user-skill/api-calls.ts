import { PROGEN_BASE_URL } from './../../config/api/base';
import { GQLCreateUserSkillInput, GQLDeleteUserSkillInput, GQLGetUserSkillInput } from "../../types/TypesGraphQL";
import { fetchDeleteAuth, fetchGetAuth, fetchPostAuth } from './../../config/api/httpClient';

export const createUserSkill = async(
  authorization: string,
  input: GQLCreateUserSkillInput | undefined
): Promise<any> => await fetchPostAuth(`${PROGEN_BASE_URL}/user/userskill`, "POST", authorization, input);

export const getUserSkills = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/userskill`, "GET", authorization);
};

export const getUserSkill = async (authorization: string, userSkillId: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/userskill/${userSkillId}`, "GET", authorization);
};

export const deleteUserSkill = async (
  authorization: string,
  input: GQLDeleteUserSkillInput
): Promise<any> => {
  return await fetchDeleteAuth(
    `${PROGEN_BASE_URL}/user/userskill/${input.userSkillId}`,
    "DELETE",
    authorization
  );
};

