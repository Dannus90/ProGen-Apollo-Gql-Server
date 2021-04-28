import { Context } from "./../../context";

export interface WorkExperienceResponse {
  workExperience: {
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
    statusCode?: number;
  }   
}

export const workExperienceResolvers = {
  WorkExperienceRoot: {
    getWorkExperience: async (
      _,
      { input: { workExperienceId }},
      { loaders }: Context
    ): Promise<WorkExperienceResponse> => {
      const workExperience = await loaders.workExperience.byWorkExperienceId.load(workExperienceId);

      const data = workExperience.workExperienceDto
      return {
        workExperience: {
          id: data.id,
          cityEn: data.cityEn,
          citySv: data.citySv,
          companyName: data.companyName,
          countryEn: data.countryEn,
          countrySv: data.countrySv,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          dateEnded: data.dateEnded,
          dateStarted: data.dateStarted,
          descriptionEn: data.descriptionEn,
          descriptionSv: data.descriptionSv,
          employmentRate: data.employmentRate,
          roleEn: data.roleEn,
          roleSv: data.roleSv,
          userId: data.userId,
          statusCode: data.statusCode
        }
      };
    }
  }
};