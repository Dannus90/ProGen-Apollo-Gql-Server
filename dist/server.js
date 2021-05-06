"use strict";
/**
 * Apollo/Gql server.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const root_type_defs_1 = require("./root-type-defs");
const apollo_server_express_1 = require("apollo-server-express");
const context_1 = require("./context");
const lodash_1 = require("lodash");
const getAuthorization_1 = require("./config/api/getAuthorization");
const root_mutation_resolvers_1 = require("./root-mutation-resolvers");
const root_resolvers_1 = require("./root-resolvers");
// Initiate apollo server.
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: root_type_defs_1.rootTypeDefs,
    resolvers: lodash_1.merge(root_resolvers_1.rootResolver, root_mutation_resolvers_1.rootMutation),
    tracing: false,
    formatError: (err) => {
        console.log(err.message);
        console.error(err.originalError);
        if (err.message.startsWith("Database Error: ")) {
            return new Error("Internal server error");
        }
        return err;
    },
    context: ({ req }) => context_1.createContext(getAuthorization_1.getAuthorization(req))
});
const app = express_1.default();
server.applyMiddleware({ app, cors: true, path: "/api/graphql" });
const PORT = process.env.PORT || 4000;
// The `listen` method launches a web server.
app
    .listen(PORT, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
})
    .setTimeout(10 * 60 * 1000);
//# sourceMappingURL=server.js.map