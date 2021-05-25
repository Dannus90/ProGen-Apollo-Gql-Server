import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  CertificateMutationRootToCreateCertificateResolver,
  CertificateMutationRootToDeleteCertificateResolver,
  CertificateMutationRootToUpdateCertificateResolver,
  GQLCertificateResponse,
  GQLDeleteCertificateResponse,
  GQLCreateCertificateResponse
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";
import { parseJson } from "../../config/api/helpers/parse-helper";
export interface CertificateMutation {
  CertificateMutationRoot: {
    createCertificate: CertificateMutationRootToCreateCertificateResolver;
    updateCertificate: CertificateMutationRootToUpdateCertificateResolver;
    deleteCertificate: CertificateMutationRootToDeleteCertificateResolver;
  };
}

export const certificateMutations: CertificateMutation = {
  CertificateMutationRoot: {
    createCertificate: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLCreateCertificateResponse> => {
      const response = await api.createCertificate(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const res = await parseJson(response);

        if(res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
        }        
      }

      const data = await response.json();

      const { certificateId } = data;

      const gqlResponse = {
        certificateId,
        statusCode: response.status
      };

      return gqlResponse;
    },
    updateCertificate: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLCertificateResponse> => {
      const response = await api.updateCertificate(
        authorization,
        body.input.certificateId,
        body.input
      );

      if (!statusCodeChecker(response.status)) {
        const res = await parseJson(response);

        if(res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
        }        
      }

      const data = await response.json();

      const certificateData = data.certificateDto;

      return {
        id: certificateData.id,
        certificateNameEn: certificateData.certificateNameEn,
        certificateNameSv: certificateData.certificateNameSv,
        identificationId: certificateData.identificationId,
        referenceAddress: certificateData.referenceAddress,
        organisation: certificateData.organisation,
        userId: certificateData.userId,
        createdAt: certificateData.createdAt,
        updatedAt: certificateData.updatedAt,
        dateIssued: certificateData.dateIssued,
        statusCode: response.status
      };
    },
    deleteCertificate: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLDeleteCertificateResponse> => {
      const response = await api.deleteCertificate(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const res = await parseJson(response);

        if(res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
        }        
      }

      return {
        message: "Certificate deleted successfully.",
        statusCode: response.status
      };
    }
  }
};
