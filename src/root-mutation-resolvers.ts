import { merge } from "lodash";
import {
  MutationToAuthenticationResolver,
  MutationToEducationResolver,
  MutationToUserDataResolver,
  MutationToUserPresentationResolver,
  MutationToWorkExperienceResolver
} from "./types/TypesGraphQL";
import { authMutations } from "./handlers/auth-handler/mutations";
import { userDataMutations } from "./handlers/user-data/mutations";
import { userPresentationMutations } from "./handlers/user-presentation/mutations";
import { workExperienceMutations } from "./handlers/work-experience/mutations";
import { educationMutations } from "./handlers/education/mutations";

interface MutationResolvers {
  Mutation: {
    authentication: MutationToAuthenticationResolver<unknown, unknown>;
    userData: MutationToUserDataResolver<unknown, unknown>;
    userPresentation: MutationToUserPresentationResolver<unknown, unknown>;
    workExperience: MutationToWorkExperienceResolver<unknown, unknown>;
    education: MutationToEducationResolver<unknown, unknown>;
  };
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true,
    userData: async () => true,
    userPresentation: async () => true,
    workExperience: async () => true,
    education: async () => true
  }
};

export const rootMutation = merge(
  mutationResolver,
  authMutations,
  userDataMutations,
  userPresentationMutations,
  workExperienceMutations,
  educationMutations
);
