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

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const entryTypeDefs = gql`
  scalar Date

  type Query {
    userData: UserDataRoot!
    userPresentation: UserPresentationRoot!
    workExperience: WorkExperienceRoot!
  }

  type Mutation {
    authentication: AuthenticationMutationRoot!
    userData: UserDataMutationRoot!
    userPresentation: UserPresentationMutationRoot!
    workExperience: WorkExperienceMutationRoot!
    education: EducationMutationRoot!
  }

  # Query Roots
  type UserPresentationRoot
  type UserDataRoot
  type WorkExperienceRoot

  # Mutation Roots
  type UserDataMutationRoot
  type AuthenticationMutationRoot
  type UserPresentationMutationRoot
  type WorkExperienceMutationRoot
  type EducationMutationRoot
`;

export const rootTypeDefs = [
  entryTypeDefs,
  authenticationTypeDefs,
  userDataTypeDefs,
  userPresentationTypeDefs,
  workExperienceTypeDefs,
  educationTypeDefs
];
