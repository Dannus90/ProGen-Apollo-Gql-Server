import { fetchGetAuth, fetchPostAuth } from "./../../config/api/httpClient";
import { PROGEN_BASE_URL } from "./../../config/api/base";
import { GQLLanguageInput } from "../../types/TypesGraphQL";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createLanguage = async (
  authorization: string,
  input: GQLLanguageInput | undefined
) => {
  return await fetchPostAuth(
    `${PROGEN_BASE_URL}/user/languages`,
    "POST",
    authorization,
    input
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserLanguage = async (authorization: string, languageId: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/languages/${languageId}`, "GET", authorization);
};