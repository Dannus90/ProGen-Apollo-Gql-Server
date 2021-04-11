/**
 * Root-type-defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from "apollo-server";
import { authenticationTypeDefs } from "./handlers/auth-handler/type-defs";
import { userDataTypeDefs } from "./handlers/user-data/type-defs";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const entryTypeDefs = gql`
  type Query {
    userData: UserDataRoot!
  }

  type Mutation {
    authentication: AuthenticationMutationRoot!
    userData: UserDataRoot!
  }

  type UserDataRoot
  type AuthenticationMutationRoot
`;

export const rootTypeDefs = [entryTypeDefs, authenticationTypeDefs, userDataTypeDefs];
