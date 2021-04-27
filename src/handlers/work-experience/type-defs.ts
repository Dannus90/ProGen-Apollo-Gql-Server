import { gql } from "apollo-server";

export const workExperienceTypeDefs = gql`
  extend type WorkExperienceMutationRoot {
    createWorkExperience(input: WorkExperienceInput): CreateWorkExperienceResponse!
    updateWorkExperience(input: UpdateWorkExperienceInput): GetUpdateWorkExperienceResponse!
  }

  extend type WorkExperienceRoot {
    getWorkExperience(input: GetWorkExperienceInput): GetUpdateWorkExperienceResponse!
  }

  type CreateWorkExperienceResponse {
    workExperienceId: String!
    statusCode: Int!
  }

  type GetUpdateWorkExperienceResponse {
    workExperience: GetAndUpdateWorkExperienceDataResponse!
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
    dateStarted: Date!
    dateEnded: Date!
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
    dateStarted: Date!
    dateEnded: Date!
  }

  input GetWorkExperienceInput {
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
    dateStarted: Date!
    dateEnded: Date!
  }
`;
