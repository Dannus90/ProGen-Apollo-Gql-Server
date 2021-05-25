import { gql } from "apollo-server";

export const skillTypeDefs = gql`
  extend type SkillMutationRoot {
    createSkill(input: CreateSkillInput!): CreateSkillResponse!
  }

  extend type SkillRoot {
    getSkills: GetSkillsResponse!
  }

  type GetSkillsResponse {
    statusCode: Int!
    skills: [Skill]!
  }

  input CreateSkillInput {
    skillName: String!
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
