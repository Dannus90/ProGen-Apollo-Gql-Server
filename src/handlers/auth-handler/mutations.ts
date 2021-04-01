/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

 import { Context } from "../../context";
 import { AuthenticationMutationRootToRegisterUserResolver } from "../../types/TypesGraphQL";
 
 export interface AuthenticationMutations {
     registerUser: AuthenticationMutationRootToRegisterUserResolver
  }
 
 export const authMutations: AuthenticationMutations = {
   registerUser: async(_, body, { api }: Context) => {
     return await api.registerUser(body.input?.email, body.input?.password)
   }
 }