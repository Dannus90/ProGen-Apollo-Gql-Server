/**
 * Apollo/Gql server.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { rootTypeDefs } from "./root-type-defs";
import { ApolloServer } from "apollo-server";
import { createContext } from "./context";
import { getAuthorization } from "./config/api/getAuthorization";

// Initiate apollo server. 
const server = new ApolloServer({
  typeDefs: rootTypeDefs,
  cors: true,
  formatError: (err) => {
    console.error(err.originalError)
    return err;
  },
  context: ({ req }) => createContext(getAuthorization(req)),
})