import { createEducationDataLoaders, EducationDataLoaders } from "./handlers/education/dataloaders";
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

export interface ContextDataLoaders {
  userData: UserDataLoaders;
  userPresentation: UserPresentationDataLoaders;
  workExperience: WorkExperienceDataLoaders;
  education: EducationDataLoaders;
  otherInformation: OtherInformationDataLoaders;
}

export const createDataLoaders = (authorization: string): ContextDataLoaders => {
  return {
    userData: createUserDataLoaders(authorization),
    userPresentation: createUserPresentationDataLoaders(authorization),
    workExperience: createWorkExperienceDataLoaders(authorization),
    education: createEducationDataLoaders(authorization),
    otherInformation: createOtherInformationDataLoaders(authorization)
  };
};
