import { PROGEN_BASE_URL } from "../../config/api/base";
import {
  fetchDeleteAuth,
  fetchGetAuth,
  fetchPostAuth,
  fetchPutAuth
} from "../../config/api/httpClient";
import {
  GQLCreateCertificateInput,
  GQLDeleteCertificateInput,
  GQLUpdateCertificateInput
} from "../../types/TypesGraphQL";

export const createCertificate = async (
  authorization: string,
  input: GQLCreateCertificateInput | undefined
) => {
  return await fetchPostAuth(`${PROGEN_BASE_URL}/user/certificate`, "POST", authorization, input);
};

export const updateCertificate = async (
  authorization: string,
  certificateId: string | undefined,
  input: GQLUpdateCertificateInput
) => {
  return await fetchPutAuth(
    `${PROGEN_BASE_URL}/user/certificate/${certificateId}`,
    "PUT",
    authorization,
    input
  );
};

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

export const deleteCertificate = async (
  authorization: string,
  input: GQLDeleteCertificateInput
): Promise<any> => {
  return await fetchDeleteAuth(
    `${PROGEN_BASE_URL}/user/certificate/${input.certificateId}`,
    "DELETE",
    authorization
  );
};
