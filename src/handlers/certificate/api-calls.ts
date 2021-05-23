import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchPostAuth } from "../../config/api/httpClient";
import { GQLCreateCertificateInput } from "../../types/TypesGraphQL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createCertificate = async (
  authorization: string,
  input: GQLCreateCertificateInput | undefined
) => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/user/certificate`, "POST", authorization, input);
};
