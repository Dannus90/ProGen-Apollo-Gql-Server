import { gql } from "apollo-server";

export const certificateTypeDefs = gql`
  extend type CertificateMutationRoot {
    createCertificate(input: CreateCertificateInput!): CreateCertificateResponse!
    updateCertificate(input: UpdateCertificateInput!): CertificateResponse!
    deleteCertificate(input: DeleteCertificateInput!): DeleteCertificateResponse!
  }

  extend type CertificateRoot {
    getCertificate(input: GetCertificateInput!): CertificateResponse!
    getCertificates: CertificatesResponse!
  }

  input GetCertificateInput {
    certificateId: String!
  }

  input DeleteCertificateInput {
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

  input UpdateCertificateInput {
    certificateId: String!
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

  type Certificate {
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
  }

  type CertificatesResponse {
    certificate: [Certificate]!
    statusCode: Int!
  }

  type CreateCertificateResponse {
    certificateId: String!
    statusCode: Int!
  }

  type DeleteCertificateResponse {
    message: String!
    statusCode: Int!
  }
`;
