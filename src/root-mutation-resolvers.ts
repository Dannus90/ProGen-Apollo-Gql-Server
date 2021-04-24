import { merge } from "lodash";
import {
  MutationToAuthenticationResolver,
  MutationToUserDataResolver,
  MutationToUserPresentationResolver
} from "./types/TypesGraphQL";
import { authMutations } from "./handlers/auth-handler/mutations";
import { userDataMutations } from "./handlers/user-data/mutations";
import { userPresentationMutations } from "./handlers/user-presentation/mutations";

interface MutationResolvers {
  Mutation: {
    authentication: MutationToAuthenticationResolver<unknown, unknown>;
    userData: MutationToUserDataResolver<unknown, unknown>;
    userPresentation: MutationToUserPresentationResolver<unknown, unknown>;
  };
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true,
    userData: async () => true,
    userPresentation: async () => true
  }
};

export const rootMutation = merge(
  mutationResolver,
  authMutations,
  userDataMutations,
  userPresentationMutations
);
