import { gql } from "apollo-server";

export const workExperienceTypeDefs = gql`
  extend type WorkExperienceMutationRoot {
    createWorkExperience(input: WorkExperienceInput): CreateWorkExperienceResponse!
    updateWorkExperience(input: UpdateWorkExperienceInput): UpdateWorkExperienceResponse!
  }

  type CreateWorkExperienceResponse {
    workExperienceId: String!
    statusCode: Int!
  }

  type UpdateWorkExperienceResponse {
    workExperience: UpdateWorkExperienceDataResponse!
  }

  type UpdateWorkExperienceDataResponse {
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
