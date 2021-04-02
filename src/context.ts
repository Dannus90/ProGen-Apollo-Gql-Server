/**
 * Gql/Apollo server context.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { ContextDataLoaders, createDataLoaders } from "./dataloaders";
import { getApiMethods, GetApiMethods } from "./api-gatherer";

export interface Context {
  authorization: string;
  loaders: ContextDataLoaders;
  api: GetApiMethods;
}

export const createContext = (authorization: string): Context => ({
  authorization,
  loaders: createDataLoaders(authorization),
  api: getApiMethods()
});
