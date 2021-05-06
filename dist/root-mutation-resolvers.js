"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootMutation = void 0;
const lodash_1 = require("lodash");
const mutations_1 = require("./handlers/auth-handler/mutations");
const mutations_2 = require("./handlers/user-data/mutations");
const mutations_3 = require("./handlers/user-presentation/mutations");
const mutations_4 = require("./handlers/work-experience/mutations");
const mutations_5 = require("./handlers/education/mutations");
const mutationResolver = {
    Mutation: {
        authentication: async () => true,
        userData: async () => true,
        userPresentation: async () => true,
        workExperience: async () => true,
        education: async () => true
    }
};
exports.rootMutation = lodash_1.merge(mutationResolver, mutations_1.authMutations, mutations_2.userDataMutations, mutations_3.userPresentationMutations, mutations_4.workExperienceMutations, mutations_5.educationMutations);
//# sourceMappingURL=root-mutation-resolvers.js.map