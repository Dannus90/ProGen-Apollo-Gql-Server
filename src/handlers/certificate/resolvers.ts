import { GQLCertificateResponse } from "../../types/TypesGraphQL";
import { Context } from "./../../context";

export const CertificateResolvers = {
  CertificateRoot: {
    getCertificate: async (
      _,
      { input: { certificateId } },
      { loaders }: Context
    ): Promise<GQLCertificateResponse> => {
      const certificate = await loaders.certificate.byCertificateId.load(certificateId);

      const {
        userId,
        certificateNameEn,
        certificateNameSv,
        id,
        identificationId,
        dateIssued,
        organisation,
        createdAt,
        referenceAddress,
        updatedAt
      } = certificate.certificateDto;

      return {
        statusCode: certificate.statusCode,
        dateIssued,
        identificationId,
        referenceAddress,
        certificateNameEn,
        certificateNameSv,
        createdAt,
        id,
        organisation,
        updatedAt,
        userId
      };
    }
  }
};
