import { merge } from "lodash";
import {
  MutationToAuthenticationResolver,
  MutationToEducationResolver,
  MutationToOtherInformationResolver,
  MutationToUserDataResolver,
  MutationToUserPresentationResolver,
  MutationToWorkExperienceResolver
} from "./types/TypesGraphQL";
import { authMutations } from "./handlers/auth-handler/mutations";
import { userDataMutations } from "./handlers/user-data/mutations";
import { userPresentationMutations } from "./handlers/user-presentation/mutations";
import { workExperienceMutations } from "./handlers/work-experience/mutations";
import { educationMutations } from "./handlers/education/mutations";
import { otherInformationMutations } from "./handlers/other-information/mutations";

interface MutationResolvers {
  Mutation: {
    authentication: MutationToAuthenticationResolver<unknown, unknown>;
    userData: MutationToUserDataResolver<unknown, unknown>;
    userPresentation: MutationToUserPresentationResolver<unknown, unknown>;
    workExperience: MutationToWorkExperienceResolver<unknown, unknown>;
    education: MutationToEducationResolver<unknown, unknown>;
    otherInformation: MutationToOtherInformationResolver<unknown, unknown>;
  };
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true,
    userData: async () => true,
    userPresentation: async () => true,
    workExperience: async () => true,
    education: async () => true,
    otherInformation: async () => true
  }
};

export const rootMutation = merge(
  mutationResolver,
  authMutations,
  userDataMutations,
  userPresentationMutations,
  workExperienceMutations,
  educationMutations,
  otherInformationMutations
);
