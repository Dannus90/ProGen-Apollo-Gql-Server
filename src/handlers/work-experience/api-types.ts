export interface CreateWorkExperienceApiResponse {
  workExperienceId: string;
}

export interface GetWorkExperienceResponse {
  workExperienceDto: {
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
}

export interface GetWorkExperienceAnswer {
  workExperienceDto: {
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
    statusCode: number;
  };
}

export interface GetWorkExperiencesAnswer {
  statusCode: number;
  workExperienceDto: Array<WorkExperienceDto>;
}

export interface WorkExperienceDto {
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
}
