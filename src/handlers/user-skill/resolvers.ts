import { GQLGetUserSkillResponse, GQLGetUserSkillsResponse } from "../../types/TypesGraphQL";
import { Context } from "./../../context";

export const UserSkillResolvers = {
  UserSkillRoot: {
    getUserSkills: async (_, __, { loaders }: Context): Promise<GQLGetUserSkillsResponse> => {
      const userSkills = await loaders.userSkill.userSkillsByUserIdInClaims.load("All")

      return {
        statusCode: userSkills.statusCode,
        userSkills: userSkills.userSkillAndSkillDtos.map((usasd) => {
          return {
            skill: usasd.skillModel,
            userSkill: usasd.userSkillModel
          }
        })
      };
    },
    getUserSkill: async (_, { input: { userSkillId } }, { loaders }: Context): Promise<GQLGetUserSkillResponse> => {
      const userSkill = await loaders.userSkill.byUserSkillId.load(userSkillId)

      return {
        statusCode: userSkill.statusCode,
        userSkill: {
          skill: userSkill.userSkillAndSkillDto.skillModel,
          userSkill: userSkill.userSkillAndSkillDto.userSkillModel
        }
      }
    }
  }
};
