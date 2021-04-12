/**
 * Root-resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
import { merge } from "lodash";
import { userDataResolvers } from "./handlers/user-data/resolvers";
import { QueryToUserDataResolver } from "./types/TypesGraphQL";

interface QueryResolvers {
  Query: {
    userData: QueryToUserDataResolver<unknown, unknown>;
  };
}

const queryResolver: QueryResolvers = {
  Query: {
    userData: async () => true
  }
};

export const rootResolver = merge(queryResolver, userDataResolvers);
