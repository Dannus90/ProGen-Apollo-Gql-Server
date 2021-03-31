/**
 * Root-type-defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from 'apollo-server';
import { articleTypeTypeDefs } from "./handlers/auth-handler/type-defs"

 // A schema is a collection of type definitions (hence "typeDefs")
 // that together define the "shape" of queries that are executed against
 // your data.
const entryTypeDefs = gql`
   type Query {
    authentication: AuthenticationRoot!
   }

   type Mutation {
    authentication: AuthenticationMutationRoot!
   }

   type AuthenticationRoot
   type AuthenticationMutationRoot
 `;

export const rootTypeDefs = [
  entryTypeDefs,
  articleTypeTypeDefs
]