import { gql } from "apollo-server";

export const workExperienceTypeDefs = gql`
  extend type WorkExperienceMutationRoot {
    createWorkExperience(input: WorkExperienceInput!): CreateWorkExperienceResponse!
    updateWorkExperience(input: UpdateWorkExperienceInput!): GetUpdateWorkExperienceResponse!
    deleteWorkExperience(input: DeleteWorkExperienceInput!): DeleteWorkExperienceResponse!
  }

  extend type WorkExperienceRoot {
    getWorkExperience(input: GetWorkExperienceInput): GetUpdateWorkExperienceResponse!
    getWorkExperiences: GetWorkExperiencesResponse!
  }

  type CreateWorkExperienceResponse {
    workExperienceId: String!
    statusCode: Int!
  }

  type DeleteWorkExperienceResponse {
    workExperienceId: String!
    statusCode: Int!
  }

  type GetWorkExperiencesResponse {
    statusCode: Int!
    workExperiences: [GetWorkExperiencesDataResponse]
  }

  type GetUpdateWorkExperienceResponse {
    workExperience: GetAndUpdateWorkExperienceDataResponse!
  }

  type GetWorkExperiencesDataResponse {
    id: String!
    userId: String!
    employmentRate: String!
    companyName: String!
    roleSv: String!
    roleEn: String!
    descriptionSv: String!
    descriptionEn: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
    createdAt: Date!
    updatedAt: Date!
  }

  type GetAndUpdateWorkExperienceDataResponse {
    id: String!
    userId: String!
    employmentRate: String!
    companyName: String!
    roleSv: String!
    roleEn: String!
    descriptionSv: String!
    descriptionEn: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
    createdAt: Date!
    updatedAt: Date!
    statusCode: Int!
  }

  input UpdateWorkExperienceInput {
    workExperienceId: String!
    employmentRate: String!
    companyName: String!
    roleSv: String!
    roleEn: String!
    descriptionSv: String!
    descriptionEn: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
  }

  input GetWorkExperienceInput {
    workExperienceId: String!
  }

  input DeleteWorkExperienceInput {
    workExperienceId: String!
  }

  input WorkExperienceInput {
    employmentRate: String!
    companyName: String!
    roleSv: String!
    roleEn: String!
    descriptionSv: String!
    descriptionEn: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
  }
`;
