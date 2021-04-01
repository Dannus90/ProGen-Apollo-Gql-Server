import { merge } from "lodash";
import { QueryToAuthenticationResolver } from "./types/TypesGraphQL";
import { authMutations } from "./handlers/auth-handler/mutations"

interface MutationResolvers {
  Mutation: {
    authentication: QueryToAuthenticationResolver<unknown, {}>
  }
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true,
  },
};

export const rootMutation = merge(
  mutationResolver,
  authMutations
);