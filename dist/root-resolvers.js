"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootResolver = void 0;
const lodash_1 = require("lodash");
const resolvers_1 = require("./handlers/user-data/resolvers");
const resolvers_2 = require("./handlers/work-experience/resolvers");
const resolvers_3 = require("./handlers/user-presentation/resolvers");
const resolvers_4 = require("./handlers/education/resolvers");
const queryResolver = {
    Query: {
        userData: async () => true,
        userPresentation: async () => true,
        workExperience: async () => true,
        education: async () => true
    }
};
exports.rootResolver = lodash_1.merge(queryResolver, resolvers_1.userDataResolvers, resolvers_3.userPresentationResolvers, resolvers_2.workExperienceResolvers, resolvers_4.EducationResolvers);
//# sourceMappingURL=root-resolvers.js.map