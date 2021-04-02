/**
 * Root-resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
import { merge } from "lodash";

interface QueryResolvers {}

const queryResolver: QueryResolvers = {
  Query: {
    authentication: async () => true
  }
};

export const rootResolver = merge(queryResolver);
