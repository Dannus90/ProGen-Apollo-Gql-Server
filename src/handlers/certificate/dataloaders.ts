import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { getCertificate, getCertificates } from "./api-calls";
import { CertificatesResponse, GetSingleCertificateResponse } from "./api-types";

export interface CertificateDataLoaders {
  byCertificateId: DataLoader<string, GetSingleCertificateResponse>;
  certificatesByUserIdInClaims: DataLoader<string, CertificatesResponse>;
}

export const createCertificateDataLoaders = (authorization: string): CertificateDataLoaders => {
  const byCertificateId = new DataLoader<string, GetSingleCertificateResponse>(async (ids) => {
    const certificates = await Promise.all(
      ids.map(async (id) => {
        const response = await getCertificate(authorization, id);
        if (!statusCodeChecker(response.status)) {
          const res = await parseJson(response);
  
          if(res) {
            throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
          } else {
            throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
          }        
        }

        const certificate = await response.json();
        certificate.statusCode = response.status;
        return certificate;
      })
    );

    return ids.map((id) => {
      return certificates.find((we) => we.certificateDto.id === id);
    });
  });

  const certificatesByUserIdInClaims = new DataLoader<"All", CertificatesResponse>(async (ids) => {
    const certificates = await Promise.all(
      ids.map(async () => {
        const response = await getCertificates(authorization);
        if (!statusCodeChecker(response.status)) {
          const res = await parseJson(response);
  
          if(res) {
            throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
          } else {
            throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
          }        
        }

        const certificatesResponse = await response.json();
        certificatesResponse.statusCode = response.status;
        return certificatesResponse;
      })
    );

    return ids.map(() => {
      return certificates[0];
    });
  });

  return {
    byCertificateId,
    certificatesByUserIdInClaims
  };
};
