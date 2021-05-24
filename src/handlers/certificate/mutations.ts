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
        const { type, statusCode, message, errors } = await response.json();

        let errorOutput = ["Unspecified error"];

        if (errors) {
          errorOutput = Object.keys(errors).map((err) => {
            return errors[err];
          });
        }

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
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
        const { type, statusCode, message, errors } = await response.json();

        const errorOutput = Object.keys(errors).map((err) => {
          return errors[err];
        });

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      const data = await response.json();

      const certificateData = data.certificateDto

      return  {
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
        const { type, statusCode, message, errors } = await response.json();

        let errorOutput = ["Unspecified error"];

        if (errors) {
          errorOutput = Object.keys(errors).map((err) => {
            return errors[err];
          });
        }

        throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
      }

      return {
        message: "Certificate deleted successfully.",
        statusCode: response.status
      };
    }
  }
};
