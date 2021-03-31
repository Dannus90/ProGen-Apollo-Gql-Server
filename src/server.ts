/**
 * Apollo/Gql server.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import express from "express";
import { rootTypeDefs } from "./root-type-defs";
import { ApolloServer } from "apollo-server-express";
import { createContext } from "./context";
import { merge } from "lodash";
import { getAuthorization } from "./config/api/getAuthorization";
import { rootMutation } from "./root-mutation-resolvers"
import { rootResolver } from "./root-resolvers"

// Initiate apollo server. 
const server = new ApolloServer({
  typeDefs: rootTypeDefs,
  resolvers: merge(rootResolver, rootMutation),
  formatError: (err) => {
    console.log(err.message)
    console.error(err.originalError)
    return err;
  },
  context: ({ req }) => createContext(getAuthorization(req)),
})

const app = express();

server.applyMiddleware({ app, cors: true, path: "/api/graphql"})

console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);


