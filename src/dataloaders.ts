/**
 * Dataloaders wrapper.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

export interface ContextDataLoaders {}

export const createDataLoaders = (
  authorization: string
): ContextDataLoaders => {
  return "Temporary";
};
