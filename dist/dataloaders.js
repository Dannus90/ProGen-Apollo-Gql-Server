"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataLoaders = void 0;
const dataloaders_1 = require("./handlers/education/dataloaders");
const dataloaders_2 = require("./handlers/user-data/dataloaders");
const dataloaders_3 = require("./handlers/user-presentation/dataloaders");
const dataloaders_4 = require("./handlers/work-experience/dataloaders");
const createDataLoaders = (authorization) => {
    return {
        userData: dataloaders_2.createUserDataLoaders(authorization),
        userPresentation: dataloaders_3.createUserPresentationDataLoaders(authorization),
        workExperience: dataloaders_4.createWorkExperienceDataLoaders(authorization),
        education: dataloaders_1.createEducationDataLoaders(authorization)
    };
};
exports.createDataLoaders = createDataLoaders;
//# sourceMappingURL=dataloaders.js.map