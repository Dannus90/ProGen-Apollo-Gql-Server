import { gql } from "apollo-server";

export const userSkillTypeDefs = gql`
  extend type UserSkillMutationRoot {
    createUserSkill(input: CreateUserSkillInput!): CreateUserSkillResponse!
  }

  extend type UserSkillRoot {
    getUserSkills: GetUserSkillsResponse!
    getUserSkill(input: GetUserSkillInput): GetUserSkillResponse!
  }

  input CreateUserSkillInput {
    skillId: String!
    skillLevel: Int!
  }

  input GetUserSkillInput {
    userSkillId: String!
  }

  type CreateUserSkillResponse {
    userSkillId: String!
    statusCode: Int!
  }

  type GetUserSkillResponse {
    statusCode: Int!
    userSkill: UserSkill
  }

  type GetUserSkillsResponse {
    statusCode: Int!
    userSkills: [UserSkill]!
  }

  type UserSkill {
    skill: SkillModel!
    userSkill: UserSkillModel!
  }

  type SkillModel {
    id: String!
    skillName: String!
  }

  type UserSkillModel {
    id: String!
    userId: String!
    skillId: String!
    skillLevel: Int!
  }
`;
