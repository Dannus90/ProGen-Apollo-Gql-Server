import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchPostAuth } from "../../config/api/httpClient";
import { GQLUpdateWorkExperienceInput, GQLWorkExperienceInput } from "../../types/TypesGraphQL";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateWorkExperience = async (
  authorization: string,
  workExperienceId: string | undefined,
  input: GQLUpdateWorkExperienceInput | undefined
) => {
  const data = { ...input };
  delete data.workExperienceId;

  return await fetchPostAuth(
    `${PROGEN_BASE_URL}/user/workexperience/${workExperienceId}`,
    "PUT",
    authorization,
    data
  );
};
