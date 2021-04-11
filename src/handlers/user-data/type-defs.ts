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
    GetFullUserInformation: FullUserInformationResponse!
  }

  type FullUserInformationResponse {
    user: User!
    userData: UserData!
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

  type UserData {
    id: String!
    userId: String!
    phoneNumber: String
    emailCv: String
    cityCv: String
    cityEn: String
    countrySv: String
    countryEn: String
    profileImage: String
    updatedAt: Date!
    createdAt: Date!
  }
`;
