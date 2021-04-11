/**
 * Root-resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
import { merge } from "lodash";

interface QueryResolvers {
  Query: {
    userData: () => Promise<boolean>
  }
}

const queryResolver: QueryResolvers = {
  Query: {
    userData: async () => true
  }
};

export const rootResolver = merge(queryResolver);
