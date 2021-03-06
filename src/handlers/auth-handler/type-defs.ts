/**
 * Authentication type defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from "apollo-server";

export const authenticationTypeDefs = gql`
  scalar Void

  type TokenResponse {
    statusCode: Int!
    accessToken: String!
    refreshToken: String!
  }

  type GeneralResponse {
    statusCode: Int!
    message: String!
  }

  extend type AuthenticationMutationRoot {
    refreshToken(input: RefreshTokenInput): TokenResponse!
    registerUser(input: RegisterInput): GeneralResponse!
    loginUser(input: LoginInput): TokenResponse!
    logoutUser: GeneralResponse!
    changeEmail(input: ChangeEmailInput): GeneralResponse!
    changePassword(input: ChangePasswordInput): GeneralResponse!
    deleteAccount(input: DeleteAccountInput): GeneralResponse!
    requestPasswordResetByEmail(input: RequestPasswordResetByEmailInput): GeneralResponse!
    resetPasswordByToken(input: ResetPasswordByTokenInput): GeneralResponse!
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input RequestPasswordResetByEmailInput {
    email: String!
  }

  input ResetPasswordByTokenInput {
    password: String!
    token: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input RefreshTokenInput {
    accessToken: String!
    refreshToken: String!
  }

  input ChangeEmailInput {
    newEmail: String!
    password: String!
  }

  input ChangePasswordInput {
    oldPassword: String!
    newPassword: String!
  }

  input DeleteAccountInput {
    password: String!
  }
`;
