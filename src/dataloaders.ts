/**
 * Dataloaders wrapper.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { createUserDataLoaders, UserDataLoaders } from "./handlers/user-data/dataloaders";

export interface ContextDataLoaders {
  userData: UserDataLoaders;
}

export const createDataLoaders = (authorization: string): ContextDataLoaders => {
  return {
    userData: createUserDataLoaders(authorization)
  };
};
