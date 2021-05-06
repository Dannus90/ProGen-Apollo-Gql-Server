"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workExperienceResolvers = void 0;
exports.workExperienceResolvers = {
    WorkExperienceRoot: {
        getWorkExperience: async (_, { input: { workExperienceId } }, { loaders }) => {
            const workExperience = await loaders.workExperience.byWorkExperienceId.load(workExperienceId);
            const data = workExperience.workExperienceDto;
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
        },
        getWorkExperiences: async (_, __, { loaders }) => {
            const workExperiences = await loaders.workExperience.workExperiencesByUserIdInClaims.load("All");
            return {
                statusCode: workExperiences.statusCode,
                workExperiences: workExperiences.workExperienceDto
            };
        }
    }
};
//# sourceMappingURL=resolvers.js.map