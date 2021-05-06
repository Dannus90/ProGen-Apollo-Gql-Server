"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.educationTypeDefs = apollo_server_1.gql `
  extend type EducationRoot {
    getEducation(input: GetEducationInput!): GetEducationResponse!
    getEducations: GetEducationsResponse!
  }

  extend type EducationMutationRoot {
    createEducation(input: CreateEducationInput!): CreateEducationResponse!
    updateEducation(input: UpdateEducationInput!): UpdateEducationResponse!
    deleteEducation(input: DeleteEducationInput!): DeleteEducationResponse!
  }

  type DeleteEducationResponse {
    educationId: String!
    statusCode: Int!
  }

  type CreateEducationResponse {
    educationId: String!
    statusCode: Int!
  }

  type UpdateEducationResponse {
    statusCode: Int!
    education: EducationResponse!
  }

  type EducationResponse {
    id: String!
    userId: String!
    educationNameSv: String!
    educationNameEn: String!
    examNameSv: String!
    examNameEn: String!
    subjectAreaSv: String!
    subjectAreaEn: String!
    descriptionSv: String!
    descriptionEn: String!
    grade: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
  }

  input DeleteEducationInput {
    educationId: String!
  }

  input CreateEducationInput {
    educationNameSv: String!
    educationNameEn: String!
    examNameSv: String!
    examNameEn: String!
    subjectAreaSv: String!
    subjectAreaEn: String!
    descriptionSv: String!
    descriptionEn: String!
    grade: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
  }
  
  input UpdateEducationInput {
    educationId: String!
    educationNameSv: String!
    educationNameEn: String!
    examNameSv: String!
    examNameEn: String!
    subjectAreaSv: String!
    subjectAreaEn: String!
    descriptionSv: String!
    descriptionEn: String!
    grade: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
  }

  input GetEducationInput {
    educationId: String!
  }

  type GetEducationsResponse {
    statusCode: Int!
    educations: [GetEducationDataResponse]
  }

  type GetEducationResponse {
    statusCode: Int!
    education: GetEducationDataResponse!
  }

  type GetEducationDataResponse {
    id: String!
    userId: String!
    educationNameSv: String!
    educationNameEn: String!
    examNameSv: String!
    examNameEn: String!
    subjectAreaSv: String!
    subjectAreaEn: String!
    descriptionSv: String!
    descriptionEn: String!
    grade: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
    createdAt: Date!
    updatedAt: Date!
  }
`;
//# sourceMappingURL=type-defs.js.map