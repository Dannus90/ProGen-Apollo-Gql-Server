"use strict";
/**
 * Authentication type defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.authenticationTypeDefs = apollo_server_1.gql `
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
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
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

  input ChangeEmailInput {
    newEmail: String!
    password: String!
  }

  input ChangePasswordInput {
    oldPassword: String!
    newPassword: String!
  }
`;
//# sourceMappingURL=type-defs.js.map