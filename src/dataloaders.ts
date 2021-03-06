import { createEducationDataLoaders, EducationDataLoaders } from "./handlers/education/dataloaders";
import {
  createLanguageDataLoaders,
  LanguageDataLoaders
} from "./handlers/language-handler/dataloaders";
import {
  createOtherInformationDataLoaders,
  OtherInformationDataLoaders
} from "./handlers/other-information/dataloaders";
import { createUserDataLoaders, UserDataLoaders } from "./handlers/user-data/dataloaders";
import {
  createUserPresentationDataLoaders,
  UserPresentationDataLoaders
} from "./handlers/user-presentation/dataloaders";
import {
  createWorkExperienceDataLoaders,
  WorkExperienceDataLoaders
} from "./handlers/work-experience/dataloaders";
import {
  FullCvInformationDataLoaders,
  createFullCvInformationDataLoaders
} from "./handlers/full-cv-information/dataloaders";
import {
  CertificateDataLoaders,
  createCertificateDataLoaders
} from "./handlers/certificate/dataloaders";
import { createSkillsDataLoaders, SkillDataLoaders } from "./handlers/skill/dataloaders";
import {
  createUserSkillsDataLoaders,
  UserSkillDataLoaders
} from "./handlers/user-skill/dataloaders";

export interface ContextDataLoaders {
  userData: UserDataLoaders;
  userPresentation: UserPresentationDataLoaders;
  workExperience: WorkExperienceDataLoaders;
  education: EducationDataLoaders;
  otherInformation: OtherInformationDataLoaders;
  language: LanguageDataLoaders;
  fullCvInformation: FullCvInformationDataLoaders;
  certificate: CertificateDataLoaders;
  skill: SkillDataLoaders;
  userSkill: UserSkillDataLoaders;
}

export const createDataLoaders = (authorization: string): ContextDataLoaders => {
  return {
    userData: createUserDataLoaders(authorization),
    userPresentation: createUserPresentationDataLoaders(authorization),
    workExperience: createWorkExperienceDataLoaders(authorization),
    education: createEducationDataLoaders(authorization),
    otherInformation: createOtherInformationDataLoaders(authorization),
    language: createLanguageDataLoaders(authorization),
    fullCvInformation: createFullCvInformationDataLoaders(authorization),
    certificate: createCertificateDataLoaders(authorization),
    skill: createSkillsDataLoaders(authorization),
    userSkill: createUserSkillsDataLoaders(authorization)
  };
};
