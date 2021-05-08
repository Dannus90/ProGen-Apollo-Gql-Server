import {
  fetchDeleteAuth,
  fetchGetAuth,
  fetchPostAuth,
  fetchPutAuth
} from "./../../config/api/httpClient";
import { PROGEN_BASE_URL } from "./../../config/api/base";
import { GQLLanguageInput, GQLUpdateLanguageInput } from "../../types/TypesGraphQL";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createLanguage = async (
  authorization: string,
  input: GQLLanguageInput | undefined
) => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/user/languages`, "POST", authorization, input);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateLanguage = async (
  authorization: string,
  input: GQLUpdateLanguageInput | undefined
) => {
  return await fetchPutAuth(
    `${PROGEN_BASE_URL}/user/languages/${input?.languageId}`,
    "PUT",
    authorization,
    input
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteLanguage = async (authorization: string, languageId: string) => {
  return await fetchDeleteAuth(
    `${PROGEN_BASE_URL}/user/languages/${languageId}`,
    "DELETE",
    authorization
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserLanguage = async (authorization: string, languageId: string): Promise<any> => {
  return await fetchGetAuth(
    `${PROGEN_BASE_URL}/user/languages/${languageId}`,
    "GET",
    authorization
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserLanguages = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/languages`, "GET", authorization);
};
