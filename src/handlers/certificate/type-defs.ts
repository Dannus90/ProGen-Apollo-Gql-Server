import { gql } from "apollo-server";

export const certificateTypeDefs = gql`
  extend type CertificateMutationRoot {
    createCertificate(input: CreateCertificateInput!): CreateUpdateCertificateResponse!
  }

  input CreateCertificateInput {
    certificateNameSv: String!
    certificateNameEn: String!
    organisation: String!
    identificationId: String!
    referenceAddress: String!
    dateIssued: Date
  }

  type CreateUpdateCertificateResponse {
    certificateId: String!
    statusCode: Int!
  }
`;
