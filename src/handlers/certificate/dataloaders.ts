import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getCertificate } from "./api-calls";
import { GetSingleCertificateResponse } from "./api-types";

export interface CertificateDataLoaders {
  byCertificateId: DataLoader<string, GetSingleCertificateResponse>;
}

export const createCertificateDataLoaders = (authorization: string): CertificateDataLoaders => {
  const byCertificateId = new DataLoader<string, GetSingleCertificateResponse>(async (ids) => {
    const certificates = await Promise.all(
      ids.map(async (id) => {
        const response = await getCertificate(authorization, id);
        if (response.status === 401) {
          const { status, statusText } = response;
          throw new HttpResponseError(statusText, status, statusText);
        } else if (!statusCodeChecker(response.status)) {
          const { type, statusCode, message, errors } = await response.json();

          let errorOutput = [""];

          if (errors) {
            errorOutput = Object.keys(errors).map((err) => {
              return errors[err];
            });
          }

          throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
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

  return {
    byCertificateId
  };
};
