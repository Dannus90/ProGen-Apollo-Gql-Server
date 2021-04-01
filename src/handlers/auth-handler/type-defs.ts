/**
 * Authentication type defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */


import { gql } from "apollo-server";

export const authenticationTypeDefs = gql`
  type TokenResponse {
    accessToken: String!
    refreshToken: String!
  }

  extend type AuthenticationMutationRoot {
    getRefreshToken(input: RefreshTokenInput): TokenResponse!
    registerUser(input: RegisterLoginInput): Boolean
    loginUser(input: RegisterLoginInput): TokenResponse!
    logoutUser: Boolean
  }

  extend type AuthenticationRoot {
    authentication: String!
  }

  input RegisterLoginInput {
    email: String!
    password: String!
  }

  input RefreshTokenInput {
    accessToken: String!
    refreshToken: String!
  }
`;
