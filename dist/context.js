"use strict";
/**
 * Gql/Apollo server context.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const api_gatherer_1 = require("./api-gatherer");
const dataloaders_1 = require("./dataloaders");
const createContext = (authorization) => ({
    authorization,
    loaders: dataloaders_1.createDataLoaders(authorization),
    api: api_gatherer_1.getApiMethods()
});
exports.createContext = createContext;
//# sourceMappingURL=context.js.map