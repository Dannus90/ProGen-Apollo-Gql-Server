/**
 * Root-type-defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from 'apollo-server';

 // A schema is a collection of type definitions (hence "typeDefs")
 // that together define the "shape" of queries that are executed against
 // your data.
 const entryTypeDefs = gql`
   type Query {
    
   }

   type Mutation {
    authentication: AuthenticationRoot!
   }

   type: AuthenticationRoot
 `;

export const rootTypeDefs = [
  entryTypeDefs
]