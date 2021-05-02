import { gql } from "apollo-server";

export const educationTypeDefs = gql`
  extend type EducationRoot {
    getEducation(input: GetEducationInput!): GetEducationResponse!
    getEducations: GetEducationsResponse!
  }

  extend type EducationMutationRoot {
    createEducation(input: CreateEducationInput!): CreateEducationResponse!
    updateEducation(input: UpdateEducationInput!): UpdateEducationResponse!
    deleteEducation(input: DeleteEducationInput!): DeleteEducationResponse!
  }

  type DeleteEducationResponse {
    educationId: String!
    statusCode: Int!
  }

  type CreateEducationResponse {
    educationId: String!
    statusCode: Int!
  }

  type UpdateEducationResponse {
    statusCode: Int!
    education: EducationResponse!
  }

  type EducationResponse {
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

  input DeleteEducationInput {
    educationId: String!
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
  
  input UpdateEducationInput {
    educationId: String!
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
