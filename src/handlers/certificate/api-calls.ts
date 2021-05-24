import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchDeleteAuth, fetchGetAuth, fetchPostAuth } from "../../config/api/httpClient";
import { GQLCreateCertificateInput, GQLDeleteCertificateInput } from "../../types/TypesGraphQL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createCertificate = async (
  authorization: string,
  input: GQLCreateCertificateInput | undefined
) => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/user/certificate`, "POST", authorization, input);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCertificate = async (
  authorization: string,
  certificateId: string | undefined
): Promise<any> => {
  return await fetchGetAuth(
    `${PROGEN_BASE_URL}/user/certificate/${certificateId}`,
    "GET",
    authorization
  );
};

export const getCertificates = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/certificate`, "GET", authorization);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteCertificate = async (authorization: string, input: GQLDeleteCertificateInput): Promise<any> => {
  return await fetchDeleteAuth(
    `${PROGEN_BASE_URL}/user/certificate/${input.certificateId}`,
    "DELETE",
    authorization
  );
};
