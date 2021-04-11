import { merge } from "lodash";
import { MutationToAuthenticationResolver } from "./types/TypesGraphQL";
import { authMutations } from "./handlers/auth-handler/mutations";

interface MutationResolvers {
  Mutation: {
    authentication: MutationToAuthenticationResolver<unknown, unknown>;
  };
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true
  }
};

export const rootMutation = merge(mutationResolver, authMutations);
