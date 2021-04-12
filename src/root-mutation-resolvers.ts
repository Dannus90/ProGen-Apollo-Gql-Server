import { merge } from "lodash";
import { MutationToAuthenticationResolver, MutationToUserDataResolver } from "./types/TypesGraphQL";
import { authMutations } from "./handlers/auth-handler/mutations";
import { userDataMutations } from "./handlers/user-data/mutations";

interface MutationResolvers {
  Mutation: {
    authentication: MutationToAuthenticationResolver<unknown, unknown>;
    userData: MutationToUserDataResolver<unknown, unknown>;
  };
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true,
    userData: async () => true
  }
};

export const rootMutation = merge(mutationResolver, authMutations, userDataMutations);
