import {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
  changeEmail,
  changePassword
} from "./handlers/auth-handler/api-calls";
import { getFullUserInformation, updateUserData } from "./handlers/user-data/api-calls";
import {
  createWorkExperience,
  updateWorkExperience,
  getWorkExperience,
  deleteWorkExperience
} from "./handlers/work-experience/api-calls";
import { updateUserPresentationData } from "./handlers/user-presentation/api-calls";
import {
  createEducation,
  deleteEducation,
  getEducation,
  updateEducation
} from "./handlers/education/api-calls";
import {
  GQLChangeEmailInput,
  GQLChangePasswordInput,
  GQLCreateEducationInput,
  GQLLanguageInput,
  GQLLoginInput,
  GQLOtherInformationInput,
  GQLRefreshTokenInput,
  GQLRegisterInput,
  GQLUpdateEducationInput,
  GQLUpdateLanguageInput,
  GQLUpdateWorkExperienceInput,
  GQLUserDataInput,
  GQLUserPresentationInput,
  GQLWorkExperienceInput
} from "./types/TypesGraphQL";
import { updateOtherInformation } from "./handlers/other-information/api-calls";
import {
  createLanguage,
  updateLanguage,
  deleteLanguage
} from "./handlers/language-handler/api-calls";

export interface GetApiMethods {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerUser: (input: GQLRegisterInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loginUser: (input: GQLLoginInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logoutUser: (authorization: string) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refreshToken: (authorization: string, input: GQLRefreshTokenInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateUserData: (authorization: string, input: GQLUserDataInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getFullUserInformation: (authorization: string) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeEmail: (authorization: string, input: GQLChangeEmailInput | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changePassword: (
    authorization: string,
    input: GQLChangePasswordInput | undefined
  ) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateUserPresentationData: (
    authorization: string,
    input: GQLUserPresentationInput | undefined
  ) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createWorkExperience: (
    authorization: string,
    input: GQLWorkExperienceInput | undefined
  ) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateWorkExperience: (
    authorization: string,
    workExperienceId: string | undefined,
    input: GQLUpdateWorkExperienceInput | undefined
  ) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getWorkExperience: (authorization: string, workExperienceId: string | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteWorkExperience: (authorization: string, workExperienceId: string) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createEducation: (
    authorization: string,
    input: GQLCreateEducationInput | undefined
  ) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getEducation: (authorization: string, educationId: string | undefined) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateEducation: (
    authorization: string,
    educationId: string | undefined,
    input: GQLUpdateEducationInput | undefined
  ) => Promise<any>;
  deleteEducation: (authorization: string, educationId: string) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateOtherInformation: (
    authorization: string,
    input: GQLOtherInformationInput | undefined
  ) => Promise<any>;
  createLanguage: (authorization: string, input: GQLLanguageInput | undefined) => Promise<any>;
  updateLanguage: (
    authorization: string,
    input: GQLUpdateLanguageInput | undefined
  ) => Promise<any>;
  deleteLanguage: (authorization: string, languageId: string) => Promise<any>;
}

export const getApiMethods = (): GetApiMethods => {
  return {
    registerUser,
    loginUser,
    logoutUser,
    refreshToken,
    updateUserData,
    getFullUserInformation,
    changeEmail,
    changePassword,
    updateUserPresentationData,
    createWorkExperience,
    updateWorkExperience,
    getWorkExperience,
    deleteWorkExperience,
    createEducation,
    getEducation,
    updateEducation,
    deleteEducation,
    updateOtherInformation,
    createLanguage,
    updateLanguage,
    deleteLanguage
  };
};
