/**
 * UserData type defs.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { gql } from "apollo-server";

export const userDataTypeDefs = gql`
   type FullUserInformationResponse {
     user: {
       id: String!
       email: String!
       firstName: string
       lastName: string
       lastLogin: Date!
       createdAt: Date!
       updatedAt: Date!
     },
     userData: {
       id: string!
       userId: string!
       phoneNumber: string
       emailCv: string
       cityCv: string
       cityEn: string
       countrySv: string
       countryEn: string
       profileImage: string
       updatedAt: Date!
       createdAt: Date!
     }
   }

   extend type UserDataRoot {
     GetFullUserInformation: FullUserInformationResponse!
   }
 `;
