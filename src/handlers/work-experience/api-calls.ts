import { PROGEN_BASE_URL } from "../../config/api/base";
import {
  fetchDeleteAuth,
  fetchGetAuth,
  fetchPostAuth,
  fetchPutAuth
} from "../../config/api/httpClient";
import { GQLUpdateWorkExperienceInput, GQLWorkExperienceInput } from "../../types/TypesGraphQL";

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

export const updateWorkExperience = async (
  authorization: string,
  workExperienceId: string | undefined,
  input: GQLUpdateWorkExperienceInput | undefined
) => {
  const data = { ...input };
  delete data.workExperienceId;

  return await fetchPutAuth(
    `${PROGEN_BASE_URL}/user/workexperience/${workExperienceId}`,
    "PUT",
    authorization,
    data
  );
};

export const deleteWorkExperience = async (authorization: string, workExperienceId: string) => {
  return await fetchDeleteAuth(
    `${PROGEN_BASE_URL}/user/workexperience/${workExperienceId}`,
    "DELETE",
    authorization
  );
};

export const getWorkExperience = async (
  authorization: string,
  workExperienceId: string | undefined
): Promise<any> => {
  return await fetchGetAuth(
    `${PROGEN_BASE_URL}/user/workexperience/${workExperienceId}`,
    "GET",
    authorization
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getWorkExperiences = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/workexperience`, "GET", authorization);
};
