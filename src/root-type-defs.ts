/**
 * Root-type-defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from "apollo-server";
import { authenticationTypeDefs } from "./handlers/auth-handler/type-defs";
import { userDataTypeDefs } from "./handlers/user-data/type-defs";
import { userPresentationTypeDefs } from "./handlers/user-presentation/type-defs";
import { workExperienceTypeDefs } from "./handlers/work-experience/type-defs";
import { educationTypeDefs } from "./handlers/education/type-defs";
import { otherInformationTypeDefs } from "./handlers/other-information/type-defs";
import { languageTypeDefs } from "./handlers/language-handler/type-defs";
import { fullCvInformationTypeDefs } from "./handlers/full-cv-information/type-defs";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const entryTypeDefs = gql`
  scalar Date

  type Query {
    userData: UserDataRoot!
    userPresentation: UserPresentationRoot!
    workExperience: WorkExperienceRoot!
    education: EducationRoot!
    otherInformation: OtherInformationRoot!
    language: LanguageRoot!
    fullCvInformation: FullCvInformationRoot!
  }

  type Mutation {
    authentication: AuthenticationMutationRoot!
    userData: UserDataMutationRoot!
    userPresentation: UserPresentationMutationRoot!
    workExperience: WorkExperienceMutationRoot!
    education: EducationMutationRoot!
    otherInformation: OtherInformationMutationRoot!
    language: LanguageMutationRoot!
  }

  # Query Roots
  type UserPresentationRoot
  type UserDataRoot
  type WorkExperienceRoot
  type EducationRoot
  type OtherInformationRoot
  type LanguageRoot
  type FullCvInformationRoot

  # Mutation Roots
  type UserDataMutationRoot
  type AuthenticationMutationRoot
  type UserPresentationMutationRoot
  type WorkExperienceMutationRoot
  type EducationMutationRoot
  type OtherInformationMutationRoot
  type LanguageMutationRoot
`;

export const rootTypeDefs = [
  entryTypeDefs,
  authenticationTypeDefs,
  userDataTypeDefs,
  userPresentationTypeDefs,
  workExperienceTypeDefs,
  educationTypeDefs,
  otherInformationTypeDefs,
  languageTypeDefs,
  fullCvInformationTypeDefs
];
