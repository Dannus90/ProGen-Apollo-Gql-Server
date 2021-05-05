export interface EducationResponse {
  statusCode: number;
  educationDto: Education;
}

export interface EducationsResponse {
  statusCode: number;
  educationsDto: Array<Education>;
}

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
  citySv: string;
  cityEn: string;
  countrySv: string;
  countryEn: string;
  dateStarted: Date;
  dateEnded: Date;
  createdAt: Date;
  updatedAt: Date;
  grade: string;
};
