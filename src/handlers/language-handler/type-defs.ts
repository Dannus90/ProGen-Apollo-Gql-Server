import { gql } from "apollo-server";

export const languageTypeDefs = gql`
  extend type LanguageMutationRoot {
    createLanguage(input: LanguageInput!): LanguageIdResponse!
  }

  input LanguageInput {
    languageSv: String!
    languageEn: String!
  }

  type LanguageIdResponse {
    languageId: String!
    statusCode: Int!
  }
`;
