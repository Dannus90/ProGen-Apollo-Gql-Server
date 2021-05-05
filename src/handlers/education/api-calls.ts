import { PROGEN_BASE_URL } from "../../config/api/base";
import {
  fetchDeleteAuth,
  fetchGetAuth,
  fetchPostAuth,
  fetchPutAuth
} from "../../config/api/httpClient";
import { GQLCreateEducationInput, GQLUpdateEducationInput } from "../../types/TypesGraphQL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createEducation = async (
  authorization: string,
  input: GQLCreateEducationInput | undefined
) => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/user/education`, "POST", authorization, input);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateEducation = async (
  authorization: string,
  educationId: string | undefined,
  input: GQLUpdateEducationInput | undefined
) => {
  const data = { ...input };

  return await fetchPutAuth(
    `${PROGEN_BASE_URL}/user/education/${educationId}`,
    "PUT",
    authorization,
    data
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteEducation = async (authorization: string, educationId: string) => {
  return await fetchDeleteAuth(
    `${PROGEN_BASE_URL}/user/education/${educationId}`,
    "DELETE",
    authorization
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEducation = async (
  authorization: string,
  educationId: string | undefined
): Promise<any> => {
  return await fetchGetAuth(
    `${PROGEN_BASE_URL}/user/education/${educationId}`,
    "GET",
    authorization
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEducations = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/education`, "GET", authorization);
};
