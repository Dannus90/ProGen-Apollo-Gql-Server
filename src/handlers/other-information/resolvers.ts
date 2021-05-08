import { Context } from "./../../context";

export interface OtherInformationResolverResponse {
  otherInformation: {
    id: string;
    userId: string;
    drivingLicenseSv: string;
    drivingLicenseEn: string;
    createdAt: Date;
    updatedAt: Date;
  };
  statusCode: number;
}

export const otherInformationResolvers = {
  OtherInformationRoot: {
    getOtherInformation: async (
      _,
      __,
      { loaders }: Context
    ): Promise<OtherInformationResolverResponse | null> => {
      const otherInformationResponse = await loaders.otherInformation.byUserIdFromClaims.load(
        "loadByUserIdInClaims"
      );

      if (!otherInformationResponse) return null;

      return {
        otherInformation: {
          id: otherInformationResponse?.otherInformationDto.id,
          userId: otherInformationResponse?.otherInformationDto.userId,
          drivingLicenseEn: otherInformationResponse?.otherInformationDto.drivingLicenseEn,
          drivingLicenseSv: otherInformationResponse?.otherInformationDto.drivingLicenseSv,
          createdAt: otherInformationResponse?.otherInformationDto.createdAt,
          updatedAt: otherInformationResponse?.otherInformationDto.updatedAt
        },
        statusCode: otherInformationResponse.otherInformationDto.statusCode
      };
    }
  }
};
