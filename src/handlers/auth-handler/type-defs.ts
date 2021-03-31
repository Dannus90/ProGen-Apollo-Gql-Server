import { gql } from "apollo-server";

export const articleTypeTypeDefs = gql`
  type TokenResponse {
    accessToken: String!
    refreshToken: String!
  }

  extend type AuthenticationMutationRoot {
    authentication: AuthMutations!
  }

  extend type AuthenticationRoot {
    authentication: String!
  }

  type AuthMutations {
    getRefreshToken(input: RefreshTokenInput): TokenResponse!
    registerUser(input: RegisterLoginInput): Boolean
    loginUser(input: RegisterLoginInput): TokenResponse!
    logoutUser: Boolean
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
