/**
 * Gql/Apollo server context.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

 import { ContextDataLoaders, createDataLoaders } from "./dataloaders";

 export interface Context {
   authorization: string;
   loaders: ContextDataLoaders;
 }
 
 export const createContext = (authorization: string): Context => ({
   authorization,
   loaders: createDataLoaders(authorization),
 });
 