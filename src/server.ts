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
import { rootMutation } from "./root-mutation-resolvers";
import { rootResolver } from "./root-resolvers";

// Initiate apollo server.
const server = new ApolloServer({
  typeDefs: rootTypeDefs,
  resolvers: merge(rootResolver, rootMutation) as any,
  tracing: false,
  formatError: (err) => {
    console.log(err.message);
    console.error(err.originalError);

    if (err.message.startsWith("Database Error: ")) {
      return new Error("Internal server error");
    }

    return err;
  },
  context: ({ req }) => createContext(getAuthorization(req))
});

const app = express();

server.applyMiddleware({ app, cors: true, path: "/api/graphql" });

const PORT = process.env.PORT || 4000;

// The `listen` method launches a web server.
app
  .listen(PORT, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
  })
  .setTimeout(10 * 60 * 1000);
