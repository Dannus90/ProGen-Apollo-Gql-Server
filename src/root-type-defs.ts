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

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const entryTypeDefs = gql`
  scalar Date

  type Query {
    userData: UserDataRoot!
    userPresentation: UserPresentationRoot!
  }

  type Mutation {
    authentication: AuthenticationMutationRoot!
    userData: UserDataMutationRoot!
    userPresentation: UserPresentationMutationRoot!
  }

  # Query Roots
  type UserPresentationRoot
  type UserDataRoot

  # Mutation Roots
  type UserDataMutationRoot
  type AuthenticationMutationRoot
  type UserPresentationMutationRoot
`;

export const rootTypeDefs = [entryTypeDefs, authenticationTypeDefs, userDataTypeDefs, userPresentationTypeDefs];
