import DataLoader from "dataloader";
import { getFullUserInformation } from "./api-calls";
import { UserInformationResponse } from "./api-types";

export interface UserDataLoaders {
  byUserIdFromClaims: DataLoader<string, UserInformationResponse | undefined>;
}

export const createUserDataLoaders = (authorization: string): UserDataLoaders => {
  const byUserIdFromClaims = new DataLoader<string, UserInformationResponse | undefined>(
    async (ids) => {
      const userDataList = await getFullUserInformation(authorization);

      const userDataResolved = await userDataList.json();

      return ids.map((id) => {
        return userDataResolved;
      });
    }
  );

  return {
    byUserIdFromClaims
  };
};
