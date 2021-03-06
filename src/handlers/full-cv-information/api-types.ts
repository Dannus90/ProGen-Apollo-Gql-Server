export interface FullCvInformationResponse {
  statusCode: number;
  fullUserInformationDto: FullUserInformation;
  otherInformationDto: OtherInformation;
  educationDtos: Array<Education | undefined>;
  workExperienceDtos: Array<WorkExperience | undefined>;
  languageDtos: Array<Language | undefined>;
  userPresentationDto: UserPresentation;
  userSkillAndSkillDtos: Array<UserSkillDto>;
  certificateDtos: Array<CertificateDto | undefined>;
}

type OtherInformation = {
  id: string;
  userId: string;
  drivingLicenseSv: string;
  drivingLicenseEn: string;
  createdAt: Date;
  updatedAt: Date;
};

type Education = {
  id: string;
  userId: string;
  educationNameSv: string;
  educationNameEn: string;
  examNameSv: string;
  examNameEn: string;
  subjectAreaSv: string;
  subjectAreaEn: string;
  descriptionSv: string;
  descriptionEn: string;
  grade: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  dateStarted: Date;
  dateEnded: Date;
  createdAt: Date;
  updatedAt: Date;
};

type WorkExperience = {
  id: string;
  userId: string;
  employmentRate: string;
  companyName: string;
  roleSv: string;
  roleEn: string;
  descriptionSv: string;
  descriptionEn: string;
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  dateStarted: Date;
  dateEnded: Date;
  createdAt: Date;
  updatedAt: Date;
};

type Language = {
  id: string;
  userId: string;
  languageSv: string;
  languageEn: string;
};

type UserPresentation = {
  id: string;
  userId: string;
  presentationSv: string;
  presentationEn: string;
  createdAt: Date;
  updatedAt: Date;
};

export type FullUserInformation = {
  user: User;
  userData: UserData;
};

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
};

type UserData = {
  id: string;
  userId: string;
  phoneNumber?: string;
  emailCv?: string;
  citySv?: string;
  cityEn?: string;
  countrySv?: string;
  countryEn?: string;
  addressZipCode?: string;
  profileImage?: string;
  profileImagePublicId?: string;
  workTitleSv?: string;
  workTitleEn?: string;
  updatedAt: Date;
  createdAt: Date;
};

type UserSkillDto = {
  skillModel: SkillModel;
  userSkillModel: UserSkillModel;
};

type SkillModel = {
  id: string;
  skillName: string;
};

type UserSkillModel = {
  id: string;
  userId: string;
  skillId: string;
  skillLevel: number;
};

type CertificateDto = {
  id: string;
  userId: string;
  certificateNameSv: string;
  certificateNameEn: string;
  organisation: string;
  identificationId: string;
  referenceAddress: string;
  dateIssued: Date;
  createdAt: Date;
  updatedAt: Date;
};
