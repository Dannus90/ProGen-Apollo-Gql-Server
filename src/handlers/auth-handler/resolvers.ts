/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { GQLAuthenticationMutationRootTypeResolver } from "../../types/TypesGraphQL";

 export interface AuthenticationMutationResolvers {
    AuthenticationSearchRoot: GQLAuthenticationMutationRootTypeResolver
 }

export const authenticationMutationResolvers: AuthenticationMutationResolvers = {
  registerUser: async(_, { email, password }, )
  
}