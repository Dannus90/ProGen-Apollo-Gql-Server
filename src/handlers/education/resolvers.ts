import { GQLGetEducationResponse, GQLGetEducationsResponse } from "../../types/TypesGraphQL";
import { Context } from "./../../context";
import { EducationsResponse } from "./api-types";

export const EducationResolvers = {
  EducationRoot: {
    getEducation: async (
      _,
      { input: { educationId } },
      { loaders }: Context
    ): Promise<GQLGetEducationResponse> => {
      const education = await loaders.education.byEducationId.load(educationId);
      
      const data = education.educationDto

      return {
        statusCode: education.statusCode,
        education: {
          id: data.id,
          cityEn: data.cityEn,
          citySv: data.citySv,
          educationName: data.educationName,
          countryEn: data.countryEn,
          countrySv: data.countrySv,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          dateEnded: data.dateEnded,
          dateStarted: data.dateStarted,
          descriptionEn: data.descriptionEn,
          descriptionSv: data.descriptionSv,
          grade: data.grade,
          subjectAreaSv: data.subjectAreaSv,
          subjectAreaEn: data.subjectAreaEn,
          userId: data.userId,
          examName: data.examName
        }
      };
    },
    getEducations: async (_, __, { loaders }: Context): Promise<GQLGetEducationsResponse> => {
      const educations = await loaders.education.educationsByUserIdInClaims.load(
        "All"
      );

      return {
        statusCode: educations.statusCode,
        educations: educations.educationsDto
      };
    }
  }
};