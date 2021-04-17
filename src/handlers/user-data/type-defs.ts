/**
 * UserData type defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from "apollo-server";

export const userDataTypeDefs = gql`
  scalar Date

  extend type UserDataRoot {
    getFullUserInformation: FullUserInformationResponse!
  }

  extend type UserDataMutationRoot {
    updateUserData(input: UserDataInput): UserUpdateResponse!
  }

  type FullUserInformationResponse {
    user: User!
    userData: UserData!
    statusCode: Int!
  }

  input UserDataInput {
    firstName: String
    lastName: String
    phoneNumber: String
    emailCv: String
    citySv: String
    cityEn: String
    countrySv: String
    countryEn: String
  }

  type User {
    id: String!
    email: String!
    firstName: String
    lastName: String
    lastLogin: Date!
    createdAt: Date!
    updatedAt: Date!
  }

  type UserUpdateResponse {
    id: String!
    userId: String!
    firstName: String
    lastName: String
    phoneNumber: String
    emailCv: String
    citySv: String
    cityEn: String
    countrySv: String
    countryEn: String
    profileImage: String
    profileImagePublicId: String
    createdAt: Date!
    updatedAt: Date!
    statusCode: Int!
  }

  type UserData {
    id: String!
    userId: String!
    phoneNumber: String
    emailCv: String
    citySv: String
    cityEn: String
    countrySv: String
    countryEn: String
    profileImage: String
    profileImagePublicId: String
    updatedAt: Date!
    createdAt: Date!
  }
`;
