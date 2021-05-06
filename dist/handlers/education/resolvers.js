"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationResolvers = void 0;
exports.EducationResolvers = {
    EducationRoot: {
        getEducation: async (_, { input: { educationId } }, { loaders }) => {
            const education = await loaders.education.byEducationId.load(educationId);
            const data = education.educationDto;
            return {
                statusCode: education.statusCode,
                education: {
                    id: data.id,
                    cityEn: data.cityEn,
                    citySv: data.citySv,
                    educationNameSv: data.educationNameSv,
                    educationNameEn: data.educationNameEn,
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
                    examNameSv: data.examNameSv,
                    examNameEn: data.examNameEn
                }
            };
        },
        getEducations: async (_, __, { loaders }) => {
            const educations = await loaders.education.educationsByUserIdInClaims.load("All");
            return {
                statusCode: educations.statusCode,
                educations: educations.educationsDto
            };
        }
    }
};
//# sourceMappingURL=resolvers.js.map