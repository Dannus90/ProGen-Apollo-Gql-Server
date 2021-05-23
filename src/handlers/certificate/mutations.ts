import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import {
  CertificateMutationRootToCreateCertificateResolver,
  GQLCreateUpdateCertificateResponse
} from "./../../types/TypesGraphQL";
import { Context } from "../../context";
export interface CertificateMutation {
  CertificateMutationRoot: {
    createCertificate: CertificateMutationRootToCreateCertificateResolver;
  };
}

export const certificateMutations: CertificateMutation = {
  CertificateMutationRoot: {
    createCertificate: async (
      _,
      body,
      { api, authorization }: Context
    ): Promise<GQLCreateUpdateCertificateResponse> => {
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
    }
  }
};
