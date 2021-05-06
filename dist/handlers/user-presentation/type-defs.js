"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPresentationTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.userPresentationTypeDefs = apollo_server_1.gql `
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
//# sourceMappingURL=type-defs.js.map