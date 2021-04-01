/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

 import { Context } from "../../context";
 import { AuthenticationMutationRootToRegisterUserResolver } from "../../types/TypesGraphQL";
 
 export interface AuthenticationMutations {
  AuthenticationMutationRoot: {
     registerUser: AuthenticationMutationRootToRegisterUserResolver
    }
  }
 
 export const authMutations: AuthenticationMutations = {
  AuthenticationMutationRoot: {
   registerUser: async(_, body, { api }: Context) => {
     return await api.registerUser(body.input?.email, body.input?.password)
   }
  }
 }