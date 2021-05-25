import { gql } from "apollo-server";

export const skillTypeDefs = gql`
  extend type SkillMutationRoot {
    createSkill(input: CreateSkillInput!): CreateSkillResponse!
    deleteSkill(input: DeleteSkillInput!): DeleteSkillResponse!
  }

  extend type SkillRoot {
    getSkills: GetSkillsResponse!
  }

  type GetSkillsResponse {
    statusCode: Int!
    skills: [Skill]!
  }

  type DeleteSkillResponse {
    message: String!
    statusCode: Int!
  }

  input CreateSkillInput {
    skillName: String!
  }

  input DeleteSkillInput {
    skillId: String!
  }

  type CreateSkillResponse {
    skillId: String!
    statusCode: Int!
  }

  type Skill {
    id: String!
    skillName: String!
  }
`;
