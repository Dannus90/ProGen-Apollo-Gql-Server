import { merge } from "lodash";
import { userDataResolvers } from "./handlers/user-data/resolvers";
import { userPresentationResolvers } from "./handlers/user-presentation/resolvers";
import { QueryToUserDataResolver } from "./types/TypesGraphQL";

interface QueryResolvers {
  Query: {
    userData: QueryToUserDataResolver<unknown, unknown>;
    userPresentation: QueryToUserDataResolver<unknown, unknown>;
  };
}

const queryResolver: QueryResolvers = {
  Query: {
    userData: async () => true,
    userPresentation: async () => true
  }
};

export const rootResolver = merge(queryResolver, userDataResolvers, userPresentationResolvers);
