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
    userSkillsAndSkills: [UserSkillFullCv]!
    certificates: [CertificateFullCv]!
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
    addressZipCode: String!
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

  type UserSkillFullCv {
    skill: SkillModelFullCv!
    userSkill: UserSkillModelFullCv!
  }

  type SkillModelFullCv {
    id: String!
    skillName: String!
  }

  type UserSkillModelFullCv {
    id: String!
    userId: String!
    skillId: String!
    skillLevel: Int!
  }

  type CertificateFullCv {
    id: String!
    userId: String!
    certificateNameSv: String!
    certificateNameEn: String!
    organisation: String!
    identificationId: String!
    referenceAddress: String!
    dateIssued: Date!
    updatedAt: Date!
    createdAt: Date!
  }
`;
