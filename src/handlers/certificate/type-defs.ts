import { gql } from "apollo-server";

export const certificateTypeDefs = gql`
  extend type CertificateMutationRoot {
    createCertificate(input: CreateCertificateInput!): CreateUpdateCertificateResponse!
  }

  extend type CertificateRoot {
    getCertificate(input: GetCertificateInput!): CertificateResponse!
  }

  input GetCertificateInput {
    certificateId: String!
  }

  input CreateCertificateInput {
    certificateNameSv: String!
    certificateNameEn: String!
    organisation: String!
    identificationId: String!
    referenceAddress: String!
    dateIssued: Date
  }

  type CertificateResponse {
    id: String!
    userId: String!
    certificateNameSv: String!
    certificateNameEn: String!
    organisation: String!
    identificationId: String!
    referenceAddress: String!
    dateIssued: Date!
    updatedAt: Date!
    createdAt: Date!
    statusCode: Int!
  }

  type CreateUpdateCertificateResponse {
    certificateId: String!
    statusCode: Int!
  }
`;
