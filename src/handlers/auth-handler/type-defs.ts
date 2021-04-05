/**
 * Authentication type defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from "apollo-server";

export const authenticationTypeDefs = gql`
  type TokenResponse {
    statusCode: Int!
    accessToken: String!
    refreshToken: String!
  }

  type RegisterLogoutResponse {
    statusCode: Int!
    message: String!
  }

  extend type AuthenticationMutationRoot {
    refreshToken(input: RefreshTokenInput): TokenResponse!
    registerUser(input: RegisterInput): RegisterLogoutResponse!
    loginUser(input: LoginInput): TokenResponse!
    logoutUser: RegisterLogoutResponse!
  }

  extend type AuthenticationRoot {
    authentication: String!
  }

  input RegisterInput {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input RefreshTokenInput {
    accessToken: String!
    refreshToken: String!
  }
`;
