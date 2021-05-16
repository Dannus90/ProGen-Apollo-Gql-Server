import { gql } from "apollo-server";

export const fullCvInformationTypeDefs = gql`
  extend type FullCvInformationRoot {
    getFullCvInformation: GetFullCvInformationResponse!
  }

  type GetFullCvInformationResponse {
    fullUserInformation: FullUserInformationFullCv!
    otherInformation: OtherInformationFullCv!
    educations: [EducationFullCv]!
    workExperiences: [WorkExperienceFullCv]!
    languages: [LanguageFullCv]!
    userPresentation: UserPresentationFullCv!
  }

  type FullUserInformationFullCv {
    id: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    emailCv: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    adressZipCode: String!
    profileImage: String!
    workTitleSv: String!
    workTitleEn: String!
  }

  type OtherInformationFullCv {
    drivingLicenseSv: String!
    drivingLicenseEn: String!
  }

  type EducationFullCv {
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
    countryEn: String!
    countrySv: String!
    dateStarted: Date
    dateEnded: Date
  }

  type WorkExperienceFullCv {
    employmentRate: String!
    companyName: String!
    roleSv: String!
    roleEn: String!
    descriptionSv: String!
    descriptionEn: String!
    citySv: String!
    cityEn: String!
    countrySv: String!
    countryEn: String!
    dateStarted: Date
    dateEnded: Date
  }

  type LanguageFullCv {
    languageSv: String!
    languageEn: String!
  }

  type UserPresentationFullCv {
    presentationSv: String!
    presentationEn: String!
  }
`;
