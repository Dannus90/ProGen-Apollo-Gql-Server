import { gql } from "apollo-server";

export const workExperienceTypeDefs = gql`
  extend type WorkExperienceMutationRoot {
    createWorkExperience(input: WorkExperienceInput): CreateWorkExperienceResponse!
  }

  type CreateWorkExperienceResponse {
    workExperienceId: String!
    statusCode: Int!
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
