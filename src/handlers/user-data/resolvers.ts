import { Context } from "./../../context";

export interface UserInformationResponse {
  user:
    | {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
      }
    | undefined;
  userData:
    | {
        id: string;
        userId: string;
        phoneNumber?: string;
        emailCv?: string;
        citySv?: string;
        cityEn?: string;
        countrySv?: string;
        countryEn?: string;
        addressZipCode?: string;
        profileImage?: string;
        profileImagePublicId?: string;
        workTitleSv?: string;
        workTitleEn?: string;
        updatedAt: Date;
        createdAt: Date;
      }
    | undefined;
  statusCode?: number;
}

export const userDataResolvers = {
  UserDataRoot: {
    getFullUserInformation: async (
      _,
      __,
      { loaders }: Context
    ): Promise<UserInformationResponse> => {
      const userData = await loaders.userData.byUserIdFromClaims.load("loadSingle");

      return {
        user: userData?.fullUserInformationDto.user,
        userData: userData?.fullUserInformationDto.userData,
        statusCode: userData?.fullUserInformationDto.statusCode
      };
    }
  }
};
