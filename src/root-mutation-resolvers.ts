import { merge } from "lodash";
import {
  MutationToAuthenticationResolver,
  MutationToCertificateResolver,
  MutationToEducationResolver,
  MutationToLanguageResolver,
  MutationToOtherInformationResolver,
  MutationToSkillResolver,
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
import { languageMutations } from "./handlers/language-handler/mutations";
import { certificateMutations } from "./handlers/certificate/mutations";
import { skillMutations } from "./handlers/skill/mutations";

interface MutationResolvers {
  Mutation: {
    authentication: MutationToAuthenticationResolver<unknown, unknown>;
    userData: MutationToUserDataResolver<unknown, unknown>;
    userPresentation: MutationToUserPresentationResolver<unknown, unknown>;
    workExperience: MutationToWorkExperienceResolver<unknown, unknown>;
    education: MutationToEducationResolver<unknown, unknown>;
    otherInformation: MutationToOtherInformationResolver<unknown, unknown>;
    language: MutationToLanguageResolver<unknown, unknown>;
    certificate: MutationToCertificateResolver<unknown, unknown>;
    skill: MutationToSkillResolver<unknown, unknown>;
  };
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true,
    userData: async () => true,
    userPresentation: async () => true,
    workExperience: async () => true,
    education: async () => true,
    otherInformation: async () => true,
    language: async () => true,
    certificate: async () => true,
    skill: async () => true
  }
};

export const rootMutation = merge(
  mutationResolver,
  authMutations,
  userDataMutations,
  userPresentationMutations,
  workExperienceMutations,
  educationMutations,
  otherInformationMutations,
  languageMutations,
  certificateMutations,
  skillMutations
);
