import { merge } from "lodash";
import { userDataResolvers } from "./handlers/user-data/resolvers";
import { workExperienceResolvers } from "./handlers/work-experience/resolvers";
import { userPresentationResolvers } from "./handlers/user-presentation/resolvers";
import {
  QueryToCertificateResolver,
  QueryToEducationResolver,
  QueryToFullCvInformationResolver,
  QueryToLanguageResolver,
  QueryToOtherInformationResolver,
  QueryToUserDataResolver,
  QueryToUserPresentationResolver,
  QueryToWorkExperienceResolver,
  QueryToSkillResolver,
  QueryToUserSkillResolver
} from "./types/TypesGraphQL";
import { EducationResolvers } from "./handlers/education/resolvers";
import { otherInformationResolvers } from "./handlers/other-information/resolvers";
import { languageResolvers } from "./handlers/language-handler/resolvers";
import { fullCvInformationResolversResolvers } from "./handlers/full-cv-information/resolvers";
import { CertificateResolvers } from "./handlers/certificate/resolvers";
import { SkillResolvers } from "./handlers/skill/resolvers";
import { UserSkillResolvers } from "./handlers/user-skill/resolvers";

interface QueryResolvers {
  Query: {
    userData: QueryToUserDataResolver<unknown, unknown>;
    userPresentation: QueryToUserPresentationResolver<unknown, unknown>;
    workExperience: QueryToWorkExperienceResolver<unknown, unknown>;
    education: QueryToEducationResolver<unknown, unknown>;
    otherInformation: QueryToOtherInformationResolver<unknown, unknown>;
    language: QueryToLanguageResolver<unknown, unknown>;
    fullCvInformation: QueryToFullCvInformationResolver<unknown, unknown>;
    certificate: QueryToCertificateResolver<unknown, unknown>;
    skill: QueryToSkillResolver<unknown, unknown>;
    userSkill: QueryToUserSkillResolver<unknown, unknown>;
  };
}

const queryResolver: QueryResolvers = {
  Query: {
    userData: async () => true,
    userPresentation: async () => true,
    workExperience: async () => true,
    education: async () => true,
    otherInformation: async () => true,
    language: async () => true,
    fullCvInformation: async () => true,
    certificate: async () => true,
    skill: async () => true,
    userSkill: async () => true
  }
};

export const rootResolver = merge(
  queryResolver,
  userDataResolvers,
  userPresentationResolvers,
  workExperienceResolvers,
  EducationResolvers,
  otherInformationResolvers,
  languageResolvers,
  fullCvInformationResolversResolvers,
  CertificateResolvers,
  SkillResolvers,
  UserSkillResolvers
);
