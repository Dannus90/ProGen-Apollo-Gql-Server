"use strict";
/**
 * Root-type-defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const type_defs_1 = require("./handlers/auth-handler/type-defs");
const type_defs_2 = require("./handlers/user-data/type-defs");
const type_defs_3 = require("./handlers/user-presentation/type-defs");
const type_defs_4 = require("./handlers/work-experience/type-defs");
const type_defs_5 = require("./handlers/education/type-defs");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const entryTypeDefs = apollo_server_1.gql `
  scalar Date

  type Query {
    userData: UserDataRoot!
    userPresentation: UserPresentationRoot!
    workExperience: WorkExperienceRoot!
    education: EducationRoot!
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
  type EducationRoot

  # Mutation Roots
  type UserDataMutationRoot
  type AuthenticationMutationRoot
  type UserPresentationMutationRoot
  type WorkExperienceMutationRoot
  type EducationMutationRoot
`;
exports.rootTypeDefs = [
    entryTypeDefs,
    type_defs_1.authenticationTypeDefs,
    type_defs_2.userDataTypeDefs,
    type_defs_3.userPresentationTypeDefs,
    type_defs_4.workExperienceTypeDefs,
    type_defs_5.educationTypeDefs
];
//# sourceMappingURL=root-type-defs.js.map