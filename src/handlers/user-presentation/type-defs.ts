import { gql } from "apollo-server";

export const userPresentationTypeDefs = gql`
  extend type UserPresentationRoot {
    getUserPresentation: UserPresentationResponse!
  }

  extend type UserPresentationMutationRoot {
    updateUserPresentation(input: UserPresentationInput): UserPresentationResponse!
  }

  type UserPresentationResponse {
    userPresentation: UserPresentation!
    statusCode: Int!
  }

  input UserPresentationInput {
    id: String!
    presentationSv: String
    presentationEn: String
  }

  type UserPresentation {
    id: String!
    userId: String!
    presentationSv: String
    presentationEn: String
    createdAt: Date!
    updatedAt: Date!
  }
`;
