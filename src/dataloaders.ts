/**
 * Dataloaders wrapper.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { createUserDataLoaders, UserDataLoaders } from "./handlers/user-data/dataloaders";
import {
  createUserPresentationDataLoaders,
  UserPresentationDataLoaders
} from "./handlers/user-presentation/dataloaders";

export interface ContextDataLoaders {
  userData: UserDataLoaders;
  userPresentation: UserPresentationDataLoaders;
}

export const createDataLoaders = (authorization: string): ContextDataLoaders => {
  return {
    userData: createUserDataLoaders(authorization),
    userPresentation: createUserPresentationDataLoaders(authorization)
  };
};
