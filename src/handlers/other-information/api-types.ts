export interface OtherInformationResponse {
  otherInformationDto: {
    id: string;
    userId: string;
    drivingLicenseSv: string;
    drivingLicenseEn: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export type OtherInformationAnswer = OtherInformationResponse & {
  otherInformationDto: {
    statusCode: number;
  };
};
