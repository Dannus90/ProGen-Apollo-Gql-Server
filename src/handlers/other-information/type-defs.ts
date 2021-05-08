import { gql } from "apollo-server";

export const otherInformationTypeDefs = gql`
  extend type OtherInformationRoot {
    getOtherInformation: OtherInformationResponse!
  }

  type OtherInformationResponse {
    otherInformation: OtherInformation!
    statusCode: Int!
  }

  type OtherInformation {
    id: String!
    userId: String!
    drivingLicenseSv: String
    drivingLicenseEn: String
    createdAt: Date!
    updatedAt: Date!
  }
`;
