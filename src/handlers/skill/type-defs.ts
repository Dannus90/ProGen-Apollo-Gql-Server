import { gql } from "apollo-server";

export const skillTypeDefs = gql`
  extend type SkillMutationRoot {
    createSkill(input: CreateSkillInput!): CreateSkillResponse!
  }

  input CreateSkillInput {
    skillName: String!
  }

  type CreateSkillResponse {
    skillId: String!
    statusCode: Int!
  }
`;
