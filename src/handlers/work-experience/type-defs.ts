import { gql } from "apollo-server";

export const workExperienceTypeDefs = gql`
  extend type WorkExperienceMutationRoot {
    createWorkExperience(input: WorkPresentationInput): CreateWorkExperienceResponse!
  }

  type CreateWorkExperienceResponse {
    workExperienceId: Number!
    statusCode: Int!
  }

  input WorkPresentationInput {
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
