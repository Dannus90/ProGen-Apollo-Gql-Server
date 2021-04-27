import { merge } from "lodash";
import { userDataResolvers } from "./handlers/user-data/resolvers";
import { workExperienceResolvers } from "./handlers/work-experience/resolvers";
import { userPresentationResolvers } from "./handlers/user-presentation/resolvers";
import { QueryToUserDataResolver, QueryToUserPresentationResolver, QueryToWorkExperienceResolver } from "./types/TypesGraphQL";

interface QueryResolvers {
  Query: {
    userData: QueryToUserDataResolver<unknown, unknown>;
    userPresentation: QueryToUserPresentationResolver<unknown, unknown>;
    workExperience: QueryToWorkExperienceResolver<unknown, unknown>;
  };
}

const queryResolver: QueryResolvers = {
  Query: {
    userData: async () => true,
    userPresentation: async () => true,
    workExperience: async () => true
  }
};

export const rootResolver = merge(queryResolver, userDataResolvers, userPresentationResolvers, workExperienceResolvers);
