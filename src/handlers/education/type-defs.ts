import { gql } from "apollo-server";

export const educationTypeDefs = gql`
  extend type EducationRoot {
    getEducation(input: GetEducationInput!): GetEducationResponse!
    getEducations: GetEducationsResponse!
  }

  extend type EducationMutationRoot {
    createEducation(input: CreateEducationInput!): CreateEducationResponse!
  }

  type CreateEducationResponse {
    educationId: String!
    statusCode: Int!
  }

  input CreateEducationInput {
    educationName: String!
    examName: String!
    subjectAreaSv: String!
    subjectAreaEn: String!
    descriptionSv: String!
    descriptionEn: String!
    grade: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
  }

  input GetEducationInput {
    educationId: String!
  }

  type GetEducationsResponse {
    statusCode: Int!
    educations: [GetEducationDataResponse]
  }

  type GetEducationResponse {
    statusCode: Int!
    education: GetEducationDataResponse!
  }

  type GetEducationDataResponse {
    id: String!
    userId: String!
    educationName: String!
    examName: String!
    subjectAreaSv: String!
    subjectAreaEn: String!
    descriptionSv: String!
    descriptionEn: String!
    grade: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
    createdAt: Date!
    updatedAt: Date!
  }
`;
