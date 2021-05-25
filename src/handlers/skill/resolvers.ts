import { GQLGetSkillsResponse } from "../../types/TypesGraphQL";
import { Context } from "./../../context";

export const SkillResolvers = {
  SkillRoot: {
    getSkills: async (_, __, { loaders }: Context): Promise<GQLGetSkillsResponse> => {
      const skills = await loaders.skill.skillsByUserIdInClaims.load("All");

      return {
        statusCode: skills.statusCode,
        skills: skills.skillDtos
      };
    }
  }
};
