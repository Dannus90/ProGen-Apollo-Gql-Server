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
}

export const createDataLoaders = (authorization: string): ContextDataLoaders => {
  return {
    userData: createUserDataLoaders(authorization),
    userPresentation: createUserPresentationDataLoaders(authorization),
    workExperience: createWorkExperienceDataLoaders(authorization)
  };
};
