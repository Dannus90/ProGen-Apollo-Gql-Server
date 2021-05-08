import { gql } from "apollo-server";

export const languageTypeDefs = gql`
  extend type LanguageRoot {
    getLanguage(input: GetLanguageInput!): LanguageResponse!
    getLanguages: LanguagesResponse!
  }

  extend type LanguageMutationRoot {
    createLanguage(input: LanguageInput!): LanguageIdResponse!
  }

  input LanguageInput {
    languageSv: String!
    languageEn: String!
  }

  input GetLanguageInput {
    languageId: String!
  }

  type LanguageIdResponse {
    languageId: String!
    statusCode: Int!
  }

  type LanguagesResponse {
    languages: [Language]!
    statusCode: Int!
  }

  type LanguageResponse {
    language: Language!
    statusCode: Int!
  }

  type Language {
    id: String!
    userId: String!
    languageSv: String!
    languageEn: String!
  }
`;
